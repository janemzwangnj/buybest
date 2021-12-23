import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function UpdateReview(props) {
  const [returnId, setReturnId] = useState(0);
  const [reviewId, setReviewId] = useState('');
  const [newReview, setNewReview] = useState({
    title: '',
    text: '',
    rating: '',
    customer_type: '',
    customer_nickname: '',
    review_submission_time:''
  });

  const getReview = async (e) => {
    e.preventDefault();
    const res = await axios.get(`http://localhost:3001/reviews/${reviewId}`);
    /* setReviewId(''); */
    console.log(res)
     setNewReview(res.data.reviews)
  };

  const createReview = (e) => {
    e.preventDefault();
    const createdReview = {
      ...newReview
    };
    console.log(createdReview);
    axios
      .put(`http://localhost:3001/reviews/${reviewId}`, createdReview)
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

  const handleChange1 = (e) => {
    setReviewId( e.target.value);
  };
  const handleChange2 = (e) => {
    setNewReview({ ...newReview, [e.target.name]: e.target.value });
    //console.log(newReview);
  };

  const handleSubmit = (e) => {
    createReview(e);
  };

  return (
    <div>
     {/*  <h3>Update Review</h3> */}
      <form onSubmit={getReview}>
        <input
          type="text"
          value={reviewId}
          onChange={handleChange1}
          name={'reviewId'}
          placeholder={'reviewId'}
        />
        <button type="submit">ID Submit</button>
      </form>

      <form className='postform' onSubmit={handleSubmit}>
        <input
          type="text"
          value={newReview.title}
          onChange={handleChange2}
          name={'title'}
          placeholder={newReview.title}
        />
        <input
          type="text"
          value={newReview.text}
          onChange={handleChange2}
          name={'text'}
          placeholder={'text'}
        />
        <input
          type="text"
          value={newReview.rating}
          onChange={handleChange2}
          name={'rating'}
          placeholder={'rating'}
        />
        <input
          type="text"
          value={newReview.customer_nickname}
          onChange={handleChange2}
          name={'customer_nickname'}
          placeholder={'customer_nickname'}
        />
        <input
          type="text-area"
          value={newReview.customer_type}
          onChange={handleChange2}
          name={'customer_type'}
          placeholder={'customer_type'}
        />
        <input
          type="text-area"
          value={newReview.review_submission_time}
          onChange={handleChange2}
          name={'review_submission_time'}
          placeholder={'review_submission_time'}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
