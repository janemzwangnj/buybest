import React from 'react'

export default function ProductCard(props) {
  return (
    <div className="card" onClick={props.onClick}>
      <div className="img-wrapper">
        <img src={props.image} alt='' />
      </div>
      <div className="info-wrapper flex-col">
        <h3>Product Name: {props.name}</h3>
        <p>Rating: {props.rating} </p>
      </div>
    </div>
  )
}