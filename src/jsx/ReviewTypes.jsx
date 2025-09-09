import React, { useState } from "react";
import "../css/ReviewTypes.css";

const reviewTypes = [
  {
    label: "House",
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80",
  },
  {
    label: "Apartment",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  },
  {
    label: "Villas",
    image: "https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=400&q=80",
  },
  {
    label: "Land",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=400&q=80",
  },
];


export default function ReviewTypes() {

  // No modal logic needed for House, use link instead

  return (
    <section className="review-types-section">
      <div className="review-types-container">
        {reviewTypes.map((type, idx) => (
          <div className="review-type-card" key={type.label}>
            <div className="review-type-img-wrapper">
              <img src={type.image} alt={type.label} className="review-type-img" />
            </div>
            <div className="review-type-label">{type.label}</div>
            {type.label === "House" ? (
              <a
                className="review-type-btn"
                href="/review-types-details"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Details
              </a>
            ) : (
              <button className="review-type-btn" disabled>
                View Details
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
