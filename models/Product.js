const { Schema } = require('mongoose');

const Product = new Schema(
  {
    product_id: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: String, required: true },
    manufacturer: { type: String, required: true },
    rating: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String, required: false },
    reviews: [{ type: Schema.Types.ObjectId, ref: 'reviews' }]
  },
  { timestamps: true }
);

module.exports = Product;
