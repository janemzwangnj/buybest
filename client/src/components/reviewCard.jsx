import React from 'react'

export default function ReviewCard(props) {
  return (
    <div className="card">
      <div className="info-wrapper flex-col">
        <h3>Title: {props.title}</h3>
        <h3>ReviewContent: {props.text}</h3>
        <h3>Rating: {props.rating} </h3>
        <h3>Customer_type: {props.customer_type}</h3>
        <h3>Review_submission_time: {props.review_submission_time}</h3>
      </div>
    </div>
  )
}