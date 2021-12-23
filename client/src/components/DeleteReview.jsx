import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function DeleteReview(props) {
  const [returnId, setReturnId] = useState(0);
  const [reviewId, setReviewId] = useState('');

  const DeleteReview = (e) => {
    e.preventDefault();
    axios.delete(`http://localhost:3001/reviews/${reviewId}`);
    setReviewId('');
    updateProduct();
  };

  const updateProduct = ()=>{
    const res = axios.get(`http://localhost:3001/products/${props.productId}`);

    let product = res.data.products;
    let newReviews = product.reviews.filter((review)=>review !== reviewId);
    axios.put(`http://localhost:3001/products/${props.productId}`, newReviews);
  }

  const handleChange = (e) => {
    setReviewId( e.target.value);
  };

  const handleSubmit = (e) => {
    DeleteReview(e);
  };

  return (
    <div>
      {/* <h3>Delete a Review</h3> */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={reviewId}
          onChange={handleChange}
          name={'reviewId'}
          placeholder={'reviewId'}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}