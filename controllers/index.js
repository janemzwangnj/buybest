const { Product, Review } = require('../models');
/* 
const getProductsById = async (req, res) => {
  try {
    //console.log(req.params);
    const { id } = req.params;
    const products = await Product.findById(id);
    if (products) {
      return res.status(200).json({ products });
    }
    return res
      .status(404)
      .send('Product with the specified ID does not exists');
  } catch (error) {
    return res.status(500).send(error.message);
  }
}; */
const getProductsById = async (req, res) => {
  try {
    console.log(req.params);
    const { id } = req.params;
    const products = await Product.findById(id);
    console.log(products);
    if (products) {
      return res.status(200).json({ products });
    }
    return res
      .status(404)
      .send('Product with the specified ID does not exists');
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    return res.status(200).json({ products });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updateProduct = async (req, res) => {
  console.log('here is update');
  try {
    const { id } = req.params;

    await Product.findByIdAndUpdate(
      id,
      req.body,
      { new: true },
      (err, product) => {
        if (err) {
          res.status(500);
          console.log(err);
        }
        if (!product) {
          res.status(500);
          console.log('Product not found!');
        }
        return res.status(200).json({ product });
      }
    );
  } catch (error) {
    console.log(error.message);
    return res.status(500);
  }
};

const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    return res.status(200).json({ reviews });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const createReview = async (req, res) => {
  try {
    const reviews = await new Review(req.body);
    await reviews.save();
    return res.status(201).json({
      reviews
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getReviewsById = async (req, res) => {
  try {
    //console.log(req.params);
    const { id } = req.params;
    const reviews = await Review.findById(id);
    if (reviews) {
      return res.status(200).json({ reviews });
    }
    return res.status(404).send('Review with the specified ID does not exists');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updateReview = async (req, res) => {
  console.log('here is update');
  try {
    const { id } = req.params;

    await Review.findByIdAndUpdate(
      id,
      req.body,
      { new: true },
      (err, review) => {
        if (err) {
          res.status(500);
          console.log(err);
        }
        if (!review) {
          res.status(500);
          console.log('Review not found!');
        }
        return res.status(200).json({ review });
      }
    );
  } catch (error) {
    console.log(error.message);
    return res.status(500);
  }
};

const deleteReview = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Review.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send('Review deleted');
    }
    throw new Error('Review not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getProductsById,
  getAllProducts,
  updateProduct,
  getAllReviews,
  createReview,
  getReviewsById,
  updateReview,
  deleteReview
};
