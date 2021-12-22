import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function ProductDetails(props) {

  const [productDetails, setProductDetails] = useState({});
  const [reviewsId, setReviewsId] = useState([]);

const getProduct = async ()=>{
        const res = await axios.get(`http://localhost:3001/products/${props.match.params.productId}`)
      console.log(res);
      setProductDetails(res.data.products);
      setReviewsId(productDetails.reviews); 
    }
  useEffect(() =>{
    console.log(props.match.params);
    getProduct();
    console.log(reviewsId)
  }, [])  

  return (
    <div className="game-content">
      <section className="image-container">
        <img src={productDetails.image} alt=""/>
      </section>
      <section className="details">
        <div className="flex-row space"></div>
        <div>
          <h2>Product Name: {productDetails.title}</h2>
          <h3>Rating: {productDetails.rating}</h3>
          <h3>Manfacturer: {productDetails.manufacturer}</h3>
          <h3>Price: {productDetails.price}</h3>
            {/* <h3>Reviews: {reviewsId.length}</h3>  */}
          <h3>Description: </h3>
          <p>{productDetails.description}</p>

        </div>
      </section>
    </div>
  )
}