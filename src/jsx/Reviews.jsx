import React from "react";
import "../css/Reviews.css";

export default function Reviews() {
  return (
    <section className="reviews-section">
      <div className="reviews-container">
        <div className="review-item">
          <div className="review-number">1000+</div>
          <p className="review-label">Properties Listed</p>
        </div>
        <div className="review-item">
          <div className="review-number">500+</div>
          <p className="review-label">Happy Customers</p>
        </div>
        <div className="review-item">
          <div className="review-number">50+</div>
          <p className="review-label">Cities Covered</p>
        </div>
        <div className="review-item">
          <div className="review-number">10+</div>
          <p className="review-label">Years Experience</p>
        </div>
      </div>
    </section>
  );
}
