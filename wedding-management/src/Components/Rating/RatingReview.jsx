import React, { useEffect, useState } from "react";
import "./RatingReviewComponent.css";

const RatingReview = ({ submitReview, setComment, reviewadd }) => {
  const [rating, setRating] = useState(0);
  console.log("comments", reviewadd);

  const handelsubmit = () => {
    submitReview(rating);
  };

  return (
    <div className="rating-review-container h-auto">
      <form>
        <div className="rating-section border border-dark">
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
          <textarea
            id="comment"
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
        </div>
        <button onClick={() => handelsubmit()} type="button">
          Submit
        </button>
      </form>
      <div className="d-flex align-content-center justify-content-evenly accordion h-auto" style={{ height: "auto" }}>
        {reviewadd.map((product, index) => 
          <div key={index}>
            <div>{product.rating}</div>
            <div>{product.name}</div>
            <div>{product.comment}</div>
          </div>
        )}
        <div onClick={()=>{}}>Delete</div>
      </div>
    </div>
  );
};

export default RatingReview;
