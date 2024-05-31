import React, { useState } from "react";
import "./RatingReviewComponent.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import LeftRating from "./LeftRating";
import '@fortawesome/fontawesome-free/css/all.min.css';

const RatingReview = ({ submitReview, setComment, reviewadd }) => {
  const [rating, setRating] = useState(0);

  const handleSubmit = () => {
    submitReview(rating);
  };



    

  return (


    <div className="rating-review-container">
      
      
      <h2>Review & Rating</h2>
      <form>
        
        <div className="rating-section">
          
          <label htmlFor="rating">Rating:</label>
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`star ${star <= rating ? "selected" : ""}`}
              onClick={() => setRating(star)}
            >
              ★
            </span>
            
          ))}
        </div>
        <div className="comment-section">
          <label htmlFor="comment">Comment:</label>
          <textarea placeholder="write your review here"
            id="comment"
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
        </div>
        <button className="review-btn-submit" onClick={handleSubmit} type="button">
         Submit
        </button>

         
 

      </form>

      <div className="h-auto" style={{ height: "auto" }}>
        {reviewadd.map((product, index) => (
          <div key={index} className="review-card">
            <span className="icon-container">
              <FontAwesomeIcon icon={faUser} className="user-icon" />
            </span>
            <span className="review-name">{product.name}</span>
            <div className="review-rating">{product.rating}★</div>
            <div className="review-comment">{product.comment}</div>
             {/* <button className="Delete-comment"type="button"> */}
    
        
      <img src="/images/Delete.png" alt="" className="Delete-comment"/>
        

          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingReview;



