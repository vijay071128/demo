import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../css/ReviewTypesDetails.css";
import { demoData } from "./ReviewTypesDetailsPage";
import { propertyMapLinks } from "./mapLinks";

// Demo arrays for dynamic property details
const posterNames = [
  'Salim Khan M', 'Vijay', 'Raja', 'Arun', 'Venkat', 'Dhanush', 'Priya', 'Anjali', 'Karthik', 'Sundar',
  'Meena', 'Siva', 'Lakshmi', 'Ramesh', 'Divya', 'Manoj', 'Asha', 'Deepak', 'Nisha', 'Rahul',
  'Sathish', 'Gowri', 'Kiran', 'Shalini', 'Ajay', 'Preethi', 'Vimal', 'Sowmya', 'Harish', 'Gayathri',
  'Suresh', 'Ramya', 'Vikram', 'Saranya', 'Bala', 'Keerthi', 'Mohan', 'Swathi', 'Aravind', 'Jaya',
  'Kavya', 'Prakash', 'Shree', 'Naveen', 'Monica', 'Yogesh', 'Sanjay', 'Sneha', 'Vivek', 'Aarthi'
];
const memberSince = [
  'Yesterday', 'Today', '1 month before', '2 weeks before', '3 days ago', '5 days ago', '2 months before', '1 week before', '3 months before', '4 days ago'
];
const furnishingTypes = ['Unfurnished', 'Semi-furnished', 'Fully furnished'];
const projectStatus = ['Ready to Move', 'Under Construction', 'New Launch'];
const locations = [
  'Haddo, Port Blair, Andaman & Nicobar Islands.', 'Chennai, India.', 'London, UK.', 'New York, USA.', 'Paris, France.',
  'Tokyo, Japan.', 'Sydney, Australia.', 'Berlin, Germany.', 'Cape Town, South Africa.', 'Toronto, Canada.',
  'Dubai, UAE.', 'Barcelona, Spain.', 'Rome, Italy.', 'Istanbul, Turkey.', 'Bangkok, Thailand.',
  'Moscow, Russia.', 'Rio de Janeiro, Brazil.', 'Los Angeles, USA.', 'San Francisco, USA.', 'Chicago, USA.'
];



export default function PropertyDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const idx = parseInt(id, 10) - 1;
  const property = demoData[idx];
  // Generate dynamic details based on idx
  const bedrooms = 1 + (idx % 3); // 1, 2, or 3
  const area = 1050 + ((idx * 17) % 200); // 1050-1249 sqft
  const bathrooms = 1 + (idx % 2); // 1 or 2
  const furnishing = furnishingTypes[idx % furnishingTypes.length];
  const status = projectStatus[idx % projectStatus.length];
  const listedBy = posterNames[idx % posterNames.length];
  const carpetArea = area - 50;
  const price = 40000 + (idx * 13000) % 900000; // 40,000 to 9,40,000
  const poster = posterNames[idx % posterNames.length];
  const member = memberSince[idx % memberSince.length];
  const itemsListed = 1 + (idx % 5);
  const location = locations[idx % locations.length];
  const [imgIdx, setImgIdx] = useState(0);
  if (!property) return <div>Property not found.</div>;
  const images = property.images || [];
  // Helper: get OpenStreetMap embed URL for a city
  function getMapEmbedUrl(city, country) {
    const query = encodeURIComponent(city + ', ' + country);
    return `https://www.openstreetmap.org/export/embed.html?search=${query}&layer=mapnik`;
  }
  // Show all 3 images at once in a gallery
  return (
    <div className="property-details-container">
      <div className="property-details-main">
        {/* Left Side */}
        <div className="property-details-left">
          <div className="property-images-gallery">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={property.title + ' img ' + (i+1)}
                className="property-gallery-img"
              />
            ))}
          </div>
          <hr style={{ border: "1px solid #eee", margin: "24px 0" }} />
          <h4>{property.title}</h4>
          <div className="property-type-list">
            <div>Type: <b>House & Villa</b></div>
            <div>Bedrooms: <b>{bedrooms}</b></div>
            <div>Super Built-up area sqft: <b>{area}</b></div>
            <div>Bathrooms: <b>{bathrooms}</b></div>
            <div>Furnishing: <b>{furnishing}</b></div>
            <div>Project Status: <b>{status}</b></div>
            <div>Listed By: <b>{listedBy}</b></div>
            <div>Carpet area sqft: <b>{carpetArea}</b></div>
          </div>
          <hr style={{ border: "1px dashed #bbb", margin: "24px 0" }} />
          <h5>Description</h5>
          <p style={{ color: "#444" }}>
            This property located in a prime area in Haddo, Port Blair is a 100 sq mt plot of land featuring a building in a friendly neighborhood. Note that: no patta is currently available, and the price is negotiable.
          </p>
        </div>
        {/* Right Side */}
        <div className="property-details-right">
          <div className="property-price-box">
            <div style={{ fontSize: 28, fontWeight: 700, color: "#ff8c00" }}>₹ {price.toLocaleString()}</div>
            <div style={{ margin: "10px 0" }}>{bedrooms} BHK - {bathrooms} Bathroom - {area} sqft</div>
            <div>Prime Location Property. No Patta. Price Negotiable.</div>
            <div style={{ color: "#888", margin: "10px 0" }}>{location}</div>
            <div style={{ color: "#aaa", fontSize: 13 }}>{member}</div>
          </div>
          <div className="property-poster-box">
            <h5>Posted by {poster}</h5>
            <div>Member since {member}</div>
            <div>{itemsListed} Items listed</div>
            <p style={{ color: "#888" }}>{location}</p>
            <button className="chat-seller-btn">Chat with seller</button>
          </div>
          <div className="property-map-box">
            {/* Render only the iframe for the current property */}
            <iframe
              title={`map-${id}`}
              width="100%"
              height="180"
              frameBorder="0"
              style={{ border: 0, borderRadius: 8, marginBottom: 16 }}
              src={propertyMapLinks[idx]}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <button className="back-btn" onClick={() => navigate(-1)} style={{ margin: 24 }}>Back</button>
    </div>
  );
}
