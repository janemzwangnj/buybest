import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function PostReview(props) {
  const [returnId, setReturnId] = useState(0);
  const [newReview, setNewReview] = useState({
    title: '',
    text: '',
    rating: '',
    customer_type: '',
    customer_nickname: '',
    review_submission_time:''
  });

  const createReview = (e) => {
    e.preventDefault();
    const createdReview = {
      ...newReview
    };
    console.log(createdReview);
    axios
      .post('http://localhost:3001/createreviews', createdReview)
      .then((response) => setReturnId(response.data.id));
    setNewReview({
      title: '',
      text: '',
      rating: '',
      customer_type: '',
      customer_nickname: '',
      review_submission_time:''
    });
  };

  const handleChange = (e) => {
    setNewReview({ ...newReview, [e.target.name]: e.target.value });
    //console.log(newReview);
  };

  const handleSubmit = (e) => {
    createReview(e);
  };

  return (
    <div>
      <h3>Add A New Review</h3>
      <form className='postform' onSubmit={handleSubmit}>
        <input
          type="text"
          value={newReview.title}
          onChange={handleChange}
          name={'title'}
          placeholder={'title'}
        />
        <input
          type="text"
          value={newReview.text}
          onChange={handleChange}
          name={'text'}
          placeholder={'text'}
        />
        <input
          type="text"
          value={newReview.rating}
          onChange={handleChange}
          name={'rating'}
          placeholder={'rating'}
        />
        <input
          type="text"
          value={newReview.customer_nickname}
          onChange={handleChange}
          name={'customer_nickname'}
          placeholder={'customer_nickname'}
        />
        <input
          type="text-area"
          value={newReview.customer_type}
          onChange={handleChange}
          name={'customer_type'}
          placeholder={'customer_type'}
        />
        <input
          type="text-area"
          value={newReview.review_submission_time}
          onChange={handleChange}
          name={'review_submission_time'}
          placeholder={'review_submission_time'}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
