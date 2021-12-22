import React, { useEffect, useState } from 'react'
import axios from 'axios'

/* export default function ProductDetails(props) {
 // console.log(props)
  return <div>
    <h1 style={{color:"red",textAlign:'center'}}>{props.storeName} ProductDetails</h1>
    <h3 style={{textAlign:'left',width:'400px',margin:'auto'}}>   There are two types of companies: hoarders and givers. RAWG is the largest video game database and game discovery service. And we are gladly sharing our 500,000+ games, search, and machine learning recommendations with the world. Learn what the RAWG games database API can do and build something cool with it!</h3>
  </div> 
} */



export default function ProductDetails(props) {

  const [productDetails, setProductDetails] = useState({})

const getProduct = async ()=>{
        const res = await axios.get(`http://localhost:3001/products/${props.match.params._id}`)
      console.log(res);
      setProductDetails(); }

  useEffect(() =>{
    console.log(props.match.params);
      getProduct();
  }, []) 

  return (
    <div className="game-content">
      <section className="image-container">
        <div>{productDetails.title}</div>
      </section>
      <section className="details">
        <div className="flex-row space"></div>
        <div>
          <img src={productDetails.image} alt=""/>
          <h3>Rating: {productDetails.rating}</h3>
          <h3>Description</h3>
          <p>{productDetails.text}</p>

        </div>
      </section>
    </div>
  )
}