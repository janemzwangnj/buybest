const db = require('../db');
const faker = require('faker');
const { Review, Product } = require('../models');
const { date } = require('faker');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const createReviews = async () => {
  const reviews = [...Array(200)].map((review) => {
    // console.log(faker.datatype);
    return new Review({
      title: faker.lorem.sentence(),
      text: faker.lorem.paragraph(),
      rating: faker.datatype.number({ min: 1, max: 5 }),
      customer_nickname: faker.name.firstName(),
      customer_type: faker.random.arrayElement([
        'VerifiedPurchaser',
        'NotVerified'
      ]),
      review_submission_time: faker.date.recent(365, new Date())
    });
  });
  await Review.insertMany(reviews);
  console.log('Created Reviewls!');
  return reviews;
};

const createProductsWithReviews = async (reviews) => {
  let lenOfItems = 50;
  const products = [...Array(lenOfItems)].map((product) => {
    const selectedReviews = reviews.splice(0, reviews.length / lenOfItems);
    return {
      title: faker.commerce.productName(),
      price: faker.commerce.price(1, 500, 2, '$'),
      manufacturer: faker.company.companyName(),
      rating: faker.datatype.float({ min: 1, max: 5, precision: 0.1 }),
      description: faker.lorem.paragraph(),
      image: faker.image.business(),
      reviews: selectedReviews.map((review) => review._id)
    };
  });
  await Product.insertMany(products);
  console.log('Created Products!');
};

const run = async () => {
  const reviews = await createReviews();
  await createProductsWithReviews(reviews);
  db.close();
};
run();
