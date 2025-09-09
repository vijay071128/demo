// ...existing code...
import React, { useState } from "react";
import "../css/Properties.css";

const properties = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    type: "Apartment",
    location: "Chennai, India",
    price: "$250,000",
    beds: 2,
    baths: 2,
    area: "1200 sqft",
    desc: "Spacious modern apartment with city view. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=600&q=80",
    type: "Villa",
    location: "Bangalore, India",
    price: "$750,000",
    beds: 4,
    baths: 3,
    area: "3200 sqft",
    desc: "Luxury villa with private garden. Pellentesque habitant morbi tristique senectus et netus.",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80",
    type: "House",
    location: "Mumbai, India",
    price: "$450,000",
    beds: 3,
    baths: 2,
    area: "1800 sqft",
    desc: "Cozy family house in a quiet neighborhood. Vestibulum ante ipsum primis in faucibus orci luctus.",
  }, 
  // Extra 3 properties
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=600&q=80",
    type: "Apartment",
    location: "Delhi, India",
    price: "$300,000",
    beds: 2,
    baths: 2,
    area: "1100 sqft",
    desc: "Modern apartment in the heart of Delhi. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    type: "Villa",
    location: "Hyderabad, India",
    price: "$900,000",
    beds: 5,
    baths: 4,
    area: "4000 sqft",
    desc: "Elegant villa with pool and garden. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=600&q=80",
    type: "House",
    location: "Pune, India",
    price: "$500,000",
    beds: 3,
    baths: 3,
    area: "2000 sqft",
    desc: "Charming house with spacious rooms. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper.",
  },
];


export default function Properties() {
  const [favorites, setFavorites] = useState(Array(properties.length).fill(false));

  const toggleFavorite = (idx) => {
    setFavorites(favs => favs.map((f, i) => (i === idx ? !f : f)));
  };

  return (
    <section className="properties-section">
      <h2 className="properties-title">Featured Properties</h2>
      <div className="properties-list">
        {properties.map((prop, idx) => (
          <div className="property-card" key={prop.id}>
            <div className="property-img-box">
              <img src={prop.image} alt={prop.type} className="property-img" />
              <span
                className={`heart-icon${favorites[idx] ? " active" : ""}`}
                onClick={() => toggleFavorite(idx)}
                title="Add to favorites"
              >
                ♥
              </span>
              <span className="property-type">{prop.type}</span>
            </div>
            <div className="property-info">
              <h4 className="property-location">
                <span className="location-icon">📍</span> {prop.location}
              </h4>
              <div className="property-price">{prop.price}</div>
              <div className="property-details">
                <span className="icon-bed">🛏️</span> 2
                <span className="icon-sep" />
                <span className="icon-bath">🚽</span> 2
                <span className="icon-sep" />
                <span className="icon-area">◼️</span> {prop.area}
              </div>
              <p className="property-desc">{prop.desc}</p>
              <button className="view-details-btn">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
