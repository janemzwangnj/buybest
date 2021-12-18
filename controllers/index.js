const { Product, Review } = require('../models');

const getProductsByName = async (req, res) => {
  try {
    const { title } = req.params;
    const products = await new Product.findById(title);
    await products.save();
    return res.status(201).json({
      rides
    });
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
    console.log(req.params);
    const { _id } = req.params;
    const reviews = await Review.findById(_id);
    if (reviews) {
      return res.status(200).json({ reviews });
    }
    return res.status(404).send('Review with the specified ID does not exists');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

/* const updateReview = async (req, res) => {
  try {
    const { id } = req.params;
    await Plant.findByIdAndUpdate(id, req.body, { new: true }, (err, plant) => {
      if (err) {
        res.status(500).send(err);
      }
      if (!plant) {
        res.status(500).send('Plant not found!');
      }
      return res.status(200).json(plant);
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
}; */

/* const deleteReview = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Plant.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send('Plant deleted');
    }
    throw new Error('Plant not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
}; */

module.exports = {
  getProductsByName,
  getAllProducts,
  getAllReviews,
  createReview,
  getReviewsById
  /*  updateReview,
  deleteReview */
};
