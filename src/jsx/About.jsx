// ...existing code...
import React from "react";
import "../css/About.css";

export default function About() {
  return (
    <section className="about-section">
      <h2 className="about-title">Search Properties</h2>
      <form className="search-form">
        <select className="form-box" name="type">
          <option>All Types</option>
          <option>House</option>
          <option>Apartment</option>
          <option>Villa</option>
          <option>Land</option>
        </select>
        <select className="form-box" name="price">
          <option>All Prices</option>
          <option>Below $100,000</option>
          <option>$100,000 - $500,000</option>
          <option>$500,000 - $1,000,000</option>
          <option>Above $1,000,000</option>
        </select>
        <select className="form-box" name="location">
          <option>Location</option>
          <option>Chennai</option>
          <option>Bangalore</option>
          <option>Mumbai</option>
          <option>Delhi</option>
        </select>
        <button className="search-btn-form" type="submit">Search</button>
      </form>
    </section>
  );
}
