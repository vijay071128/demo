import React, { useState } from "react";
import "../css/ReviewTypesDetails.css";

// Demo data for 50 houses with different locations, countries, currencies, and images
const demoData = [
  { city: "Chennai", country: "India", currency: "₹", image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80" },
  { city: "London", country: "UK", currency: "£", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" },
  { city: "New York", country: "USA", currency: "$", image: "https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=600&q=80" },
  { city: "Paris", country: "France", currency: "€", image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=600&q=80" },
  { city: "Tokyo", country: "Japan", currency: "¥", image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80" },
  { city: "Sydney", country: "Australia", currency: "$", image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=600&q=80" },
  { city: "Berlin", country: "Germany", currency: "€", image: "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=600&q=80" },
  { city: "Cape Town", country: "South Africa", currency: "R", image: "https://images.unsplash.com/photo-1468436139062-f60a71c5c892?auto=format&fit=crop&w=600&q=80" },
  { city: "Toronto", country: "Canada", currency: "$", image: "https://images.unsplash.com/photo-1468327768560-75b778cbb551?auto=format&fit=crop&w=600&q=80" },
  { city: "Dubai", country: "UAE", currency: "د.إ", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80" },
];

const houseCards = Array.from({ length: 50 }, (_, i) => {
  const d = demoData[i % demoData.length];
  return {
    id: i + 1,
    image: d.image,
    title: `House #${i + 1}`,
    location: `${d.city}, ${d.country}`,
    price: `${d.currency}${250000 + i * 1000}`,
    beds: 2 + (i % 4),
    baths: 1 + (i % 3),
    area: `${1200 + (i * 13) % 800} sqft`,
    desc: `Beautiful house in ${d.city}, ${d.country}. Modern amenities and great location.`
  };
});

export default function ReviewTypesDetails({ onClose }) {
  return (
    <div className="review-types-details-modal">
      <div className="review-types-details-content">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2 className="details-title">All Houses</h2>
        <div className="details-list">
          {houseCards.map((house) => (
            <div className="details-card" key={house.id}>
              <img src={house.image} alt={house.title} className="details-img" />
              <div className="details-info">
                <h4>{house.title}</h4>
                <div className="details-location">{house.location}</div>
                <div className="details-price">{house.price}</div>
                <div className="details-meta">
                  <span className="icon-bed">🛏️</span> <span className="meta-text">{house.beds}</span>
                  <span className="icon-sep" />
                  <span className="icon-bath">🚽</span> <span className="meta-text">{house.baths}</span>
                  <span className="icon-sep" />
                  <span className="icon-area">◼️</span> <span className="meta-text">{house.area}</span>
                </div>
                <p className="details-desc">{house.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
