const { Schema } = require('mongoose');

const Review = new Schema(
  {
    title: { type: String, required: true },
    text: { type: String, required: true },
    rating: { type: String, required: true },
    customer_nickname: { type: String, required: true },
    review_submission_time: { type: Date, required: true },
    customer_type: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = Review;
