import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PostReview from '../components/PostReview';
import DeleteReview from '../components/DeleteReview';
import ReviewCard from '../components/ReviewCard';
import UpdateReview from '../components/UpdateReview';

export default function ProductDetails(props) {

  const [productDetails, setProductDetails] = useState({});
  const [reviewsId, setReviewsId] = useState([]);
  const [reviews, setReviews] = useState([]) 
  const [isPost, toggleIsPost] = useState(false)
  const [isView, toggleIsView] = useState(false)
  const [isUpdate, toggleIsUpdate] = useState(false)
  const [isDelete, toggleIsDelete] = useState(false)
  const [currReviewId, setCurrReviewId] = useState('')
  const [productId, setProductId] = useState('')
  let reviewsIdTmp = [];
  let reviewsTmp = [];

const getProduct = async ()=>{
        const res = await axios.get(`http://localhost:3001/products/${props.match.params.productId}`)
      setProductDetails(res.data.products);
      reviewsIdTmp = res.data.products.reviews;
      setReviewsId(reviewsIdTmp); 
      setProductId(props.match.params.productId);
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
      toggleIsDelete(false)
    };
  
  const addReview = async (event)=>{
    event.preventDefault()
    toggleIsDelete(false)
    toggleIsPost(true);
    toggleIsView(false);
    toggleIsUpdate(false)
  };

  const updateReview = async (event)=>{
    event.preventDefault()
    console.log(event.target)
   /*  setCurrReviewId(event.target.); */
    toggleIsPost(false);
    toggleIsView(false);
    toggleIsUpdate(true)
    toggleIsDelete(false)
  }
  const deleteReview = async (event)=>{
    event.preventDefault()
    toggleIsDelete(true)
    toggleIsPost(false);
    toggleIsView(false);
    toggleIsUpdate(false)
  }
  

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
        <button onClick={viewAllReviews}>View All Reviews</button>  
        <button onClick={addReview}>Post a Review</button>
        <button onClick={updateReview}>Update a Review</button>
        <button onClick={deleteReview}>Delete a Review</button>
        </div>
      </section>
        <div>
        {isPost ? (
          <div>
            <h2>Post your review here:</h2>
             <section className="search-results">
                <PostReview productId={productId}/>
            </section> 
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
                  deleteReview = {deleteReview}
                  updateReview = {updateReview}
                  onClick={()=>props.history.push(`/fakestore/productdetails/updateReview/${review._id}`)}
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
             <section className="search-results">
                <UpdateReview />
            </section> 
          </div>
        ) : null}
        </div>
        <div>
        {isDelete ? (
          <div>
            <h2>Delete Review: </h2>
             <section className="search-results container-grid">
                <DeleteReview productId={productId}/>
            </section> 
          </div>
        ) : null}
        </div>
    </div>
  )
}