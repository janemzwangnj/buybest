import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AddReview from './AddReview';
import ReviewCard from '../components/ReviewCard';

export default function ProductDetails(props) {

  const [productDetails, setProductDetails] = useState({});
  const [reviewsId, setReviewsId] = useState([]);
  const [reviews, setReviews] = useState([]) 
  const [isPost, toggleIsPost] = useState(false)
  const [isView, toggleIsView] = useState(false)
  const [isUpdate, toggleIsUpdate] = useState(false)
  let reviewsIdTmp = [];
  let reviewsTmp = [];

const getProduct = async ()=>{
        const res = await axios.get(`http://localhost:3001/products/${props.match.params.productId}`)
      //console.log(res);
      setProductDetails(res.data.products);
      reviewsIdTmp = res.data.products.reviews;
      setReviewsId(reviewsIdTmp); 
    }
  useEffect(() =>{
    console.log(props.match.params);
    getProduct();
  }, [])  

    const viewAllReviews = async (event)=>{
      console.log(reviewsId)
      event.preventDefault()
      for (let i = 0; i<reviewsId.length; i++){
        const res = await axios.get(`http://localhost:3001/reviews/${reviewsId[i]}`);
        console.log(res)
        reviewsTmp.push(res.data.reviews)
      }
      /* reviewsTmp = reviewsId.map((aReviewId) => (res.data.reviews));  */
      console.log(reviewsTmp)
      setReviews(reviewsTmp)
      toggleIsView(true)
      toggleIsPost(false)
      toggleIsUpdate(false)
    };
  
  const addReview = async (event)=>{
    event.preventDefault()
    
    toggleIsPost(true);
    toggleIsView(false);
    toggleIsUpdate(false)
  };

  const updateReview = async (event)=>{
    event.preventDefault()
    
    toggleIsPost(false);
    toggleIsView(false);
    toggleIsUpdate(true)
  }
  const deleteReview = async ()=>{}
  

  return (
    <div className="product-content"> 
      <section className="image-container">
        <img src={productDetails.image} alt=""/>
      </section>
      <section className="details">
        <div className="flex-row space"></div>
        <div>
          <h2>Product Name: {productDetails.title} </h2>
          <h3>Rating: {productDetails.rating} </h3>
          <h3>Manfacturer: {productDetails.manufacturer} </h3>
          <h3>Price: {productDetails.price} </h3>
          <h3>Reviews: {reviewsId.length} </h3>
          <h3>Description: </h3>
          <h3>{productDetails.description}</h3>
        </div>
        <div className='postandview'>
        <button onClick={addReview}>Post a Review</button>
        <button onClick={viewAllReviews}>View All Reviews For This Product </button>
        </div>
      </section>
        <div>
        {isPost ? (
          <div>
            <h2>Post your review here:</h2>
            {/* <section className="search-results">
                <AddReview
                  key={result.id}
                  {...result}
                  onClick={() =>
                    props.history.push(`/games/details/${result.id}`)
                  }
                  image={result.background_image}
                />
            </section> */}
          </div>
        ) : null}
        </div>
        <div>
        {isView ? (
          <div>
            <h2>All Reviews: </h2>
             <section className="search-results container-grid">
              { reviews.map((review, index) => (
                <ReviewCard
                  key={index}
                  delete = {deleteReview}
                  update = {updateReview}
                  {...review}
                />
              ))}
            </section> 
          </div>
        ) : null}
        </div>
        <div>
        {isUpdate ? (
          <div>
            <h2>Update this Review: </h2>
            {/*  <section className="search-results container-grid">
              { reviews.map((review, index) => (
                <ReviewCard
                  key={index}
                  {...review}
                />
              ))}
            </section>  */}
          </div>
        ) : null}
        </div>
    </div>
  )
}