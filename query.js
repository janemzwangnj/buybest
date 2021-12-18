const db = require('./db');
const { Product, Review } = require('./models');

const findAllProducts = async () => {
  const products = await Product.find();
  console.log('All products:', products);
};

const findAllreviews = async () => {
  const reviews = await Review.find();
  console.log('All reviews:', reviews);
};

const findOneWithReviews = async () => {
  const product1 = await Product.findOne();
  // Try to use the populate method here to load all of the tasks for a user
  // https://mongoosejs.com/docs/populate.html
  //console.log(JSON.stringify(product1), null, 2);
  console.log(product1);
};

const run = async () => {
  try {
    //await findAllProducts();
    // await findAllReviwes()
    await findOneWithReviews();
  } catch (error) {
    console.log(error);
  } finally {
    await db.close();
  }
};

run();
