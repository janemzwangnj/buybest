import React from 'react'

export default function ReviewCard(props) {
  console.log(props)
  return (
    <div className="card">
      <div className="info-wrapper flex-col">
        <h3>Title: {props.title}</h3>
        <h3>Comment: {props.text}</h3>
        <h3>Rating: {props.rating} </h3>
        <h4>Customer_type: {props.customer_type}</h4>
        <h4>Review_submission_time: {props.review_submission_time}</h4>
      </div>
      <div className='deleteOrupdate'>
      <button onClick={props.delete}>Delete</button>
      <button onClick={props.update}>Update</button>
      </div>
    </div>
  )
}