const { Schema } = require('mongoose');

const Review = new Schema(
  {
    title: { type: String, required: true },
    text: { type: String, required: true },
    rating: { type: String, required: true },
    customer_nickname: { type: String, required: false },
    review_submission_time: { type: Date, required: false },
    customer_type: { type: String, required: false }
  },
  { timestamps: true }
);

module.exports = Review;
