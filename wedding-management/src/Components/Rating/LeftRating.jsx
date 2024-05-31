// src/Ratings.js
import React from 'react';
import './LeftRating.css';

const LeftRating = () => {
  const ratingsData = {
    totalRating: 3.9,
    totalRatings: 1322,
    totalReviews: 331,
    distribution: [
      { label: 'Excellent', count: 575, color: '#4caf50' },
      { label: 'Very Good', count: 370, color: '#8bc34a' },
      { label: 'Good', count: 202, color: '#ffc107' },
      { label: 'Average', count: 65, color: '#ff9800' },
      { label: 'Poor', count: 110, color: '#f44336' },
    ],
  };

  return (
    <div className="ratings-container">
      <div className="rating-overview">
        <div className="rating-score">{ratingsData.totalRating}</div>
        <div className="rating-info">

          <div>{ratingsData.totalRatings} Ratings,
          
          <div>{ratingsData.totalReviews} Reviews</div>
          </div>
        </div>
      </div>
      <div className="rating-distribution">
        {ratingsData.distribution.map((item, index) => (
          <div key={index} className="rating-bar">
            <span className="rating-label">{item.label}</span>
            <div className="bar-container">
              <div
                className="bar-fill"
                style={{ width: `${(item.count / ratingsData.totalRatings) * 100}%`, backgroundColor: item.color }}
              ></div>
            </div>
            <span className="rating-count">{item.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftRating;
