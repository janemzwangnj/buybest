const { model } = require('mongoose');
const ReviewSchema = require('./review');
const ProductSchema = require('./product');

const Product = model('products', ProductSchema);
const Review = model('reviews', ReviewSchema);

module.exports = {
  Product,
  Review
};
