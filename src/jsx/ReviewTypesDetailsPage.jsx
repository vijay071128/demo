import React, { useState } from "react";
import 'animate.css';
// 50 properties, each with 3 unique Unsplash image URLs
export const propertyImages = [
  ["https://cdn.wallpapersafari.com/27/74/XtkN6u.jpg", "https://images.unsplash.com/photo-1465101046530-73398c7f28ca", "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd"],
  ["https://images.unsplash.com/photo-1467987506553-8f3916508521", "https://images.unsplash.com/photo-1507089947368-19c1da9775ae", "https://images.unsplash.com/photo-1449844908441-8829872d2607"],
  ["https://images.unsplash.com/photo-1464037866556-6812c9d1c72e", "https://images.unsplash.com/photo-1460518451285-97b6aa326961", "https://images.unsplash.com/photo-1501594907352-04cda38ebc29"],
  ["https://images.unsplash.com/photo-1465101178521-c1a9136a3b99", "https://images.unsplash.com/photo-1465101046530-73398c7f28ca", "https://images.unsplash.com/photo-1506744038136-46273834b3fb"],
  ["https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd", "https://images.unsplash.com/photo-1467987506553-8f3916508521", "https://images.unsplash.com/photo-1507089947368-19c1da9775ae"],
  ["https://images.unsplash.com/photo-1449844908441-8829872d2607", "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e", "https://images.unsplash.com/photo-1460518451285-97b6aa326961"],
  ["https://images.unsplash.com/photo-1501594907352-04cda38ebc29", "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99", "https://images.unsplash.com/photo-1465101046530-73398c7f28ca"],
  ["https://images.unsplash.com/photo-1506744038136-46273834b3fb", "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd", "https://images.unsplash.com/photo-1467987506553-8f3916508521"],
  ["https://images.unsplash.com/photo-1507089947368-19c1da9775ae", "https://images.unsplash.com/photo-1449844908441-8829872d2607", "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e"],
  ["https://images.unsplash.com/photo-1460518451285-97b6aa326961", "https://images.unsplash.com/photo-1501594907352-04cda38ebc29", "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99"],
  ["https://images.unsplash.com/photo-1465101046530-73398c7f28ca", "https://images.unsplash.com/photo-1506744038136-46273834b3fb", "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd"],
  ["https://images.unsplash.com/photo-1467987506553-8f3916508521", "https://images.unsplash.com/photo-1507089947368-19c1da9775ae", "https://images.unsplash.com/photo-1449844908441-8829872d2607"],
  ["https://images.unsplash.com/photo-1464037866556-6812c9d1c72e", "https://images.unsplash.com/photo-1460518451285-97b6aa326961", "https://images.unsplash.com/photo-1501594907352-04cda38ebc29"],
  ["https://images.unsplash.com/photo-1465101178521-c1a9136a3b99", "https://images.unsplash.com/photo-1465101046530-73398c7f28ca", "https://images.unsplash.com/photo-1506744038136-46273834b3fb"],
  ["https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd", "https://images.unsplash.com/photo-1467987506553-8f3916508521", "https://images.unsplash.com/photo-1507089947368-19c1da9775ae"],
  ["https://images.unsplash.com/photo-1449844908441-8829872d2607", "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e", "https://images.unsplash.com/photo-1460518451285-97b6aa326961"],
  ["https://images.unsplash.com/photo-1501594907352-04cda38ebc29", "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99", "https://images.unsplash.com/photo-1465101046530-73398c7f28ca"],
  ["https://images.unsplash.com/photo-1506744038136-46273834b3fb", "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd", "https://images.unsplash.com/photo-1467987506553-8f3916508521"],
  ["https://images.unsplash.com/photo-1507089947368-19c1da9775ae", "https://images.unsplash.com/photo-1449844908441-8829872d2607", "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e"],
  ["https://images.unsplash.com/photo-1460518451285-97b6aa326961", "https://images.unsplash.com/photo-1501594907352-04cda38ebc29", "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99"],
  ["https://images.unsplash.com/photo-1465101046530-73398c7f28ca", "https://images.unsplash.com/photo-1506744038136-46273834b3fb", "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd"],
  ["https://images.unsplash.com/photo-1467987506553-8f3916508521", "https://images.unsplash.com/photo-1507089947368-19c1da9775ae", "https://images.unsplash.com/photo-1449844908441-8829872d2607"],
  ["https://images.unsplash.com/photo-1464037866556-6812c9d1c72e", "https://images.unsplash.com/photo-1460518451285-97b6aa326961", "https://images.unsplash.com/photo-1501594907352-04cda38ebc29"],
  ["https://images.unsplash.com/photo-1465101178521-c1a9136a3b99", "https://images.unsplash.com/photo-1465101046530-73398c7f28ca", "https://images.unsplash.com/photo-1506744038136-46273834b3fb"],
  ["https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd", "https://images.unsplash.com/photo-1467987506553-8f3916508521", "https://images.unsplash.com/photo-1507089947368-19c1da9775ae"],
  ["https://images.unsplash.com/photo-1449844908441-8829872d2607", "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e", "https://images.unsplash.com/photo-1460518451285-97b6aa326961"],
  ["https://images.unsplash.com/photo-1501594907352-04cda38ebc29", "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99", "https://images.unsplash.com/photo-1465101046530-73398c7f28ca"],
  ["https://images.unsplash.com/photo-1506744038136-46273834b3fb", "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd", "https://images.unsplash.com/photo-1467987506553-8f3916508521"],
  ["https://images.unsplash.com/photo-1507089947368-19c1da9775ae", "https://images.unsplash.com/photo-1449844908441-8829872d2607", "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e"],
  ["https://images.unsplash.com/photo-1460518451285-97b6aa326961", "https://images.unsplash.com/photo-1501594907352-04cda38ebc29", "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99"],
  ["https://images.unsplash.com/photo-1465101046530-73398c7f28ca", "https://images.unsplash.com/photo-1506744038136-46273834b3fb", "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd"],
  ["https://images.unsplash.com/photo-1467987506553-8f3916508521", "https://images.unsplash.com/photo-1507089947368-19c1da9775ae", "https://images.unsplash.com/photo-1449844908441-8829872d2607"],
  ["https://images.unsplash.com/photo-1464037866556-6812c9d1c72e", "https://images.unsplash.com/photo-1460518451285-97b6aa326961", "https://images.unsplash.com/photo-1501594907352-04cda38ebc29"],
  ["https://images.unsplash.com/photo-1465101178521-c1a9136a3b99", "https://images.unsplash.com/photo-1465101046530-73398c7f28ca", "https://images.unsplash.com/photo-1506744038136-46273834b3fb"],
  ["https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd", "https://images.unsplash.com/photo-1467987506553-8f3916508521", "https://images.unsplash.com/photo-1507089947368-19c1da9775ae"],
  ["https://images.unsplash.com/photo-1449844908441-8829872d2607", "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e", "https://images.unsplash.com/photo-1460518451285-97b6aa326961"],
  ["https://images.unsplash.com/photo-1501594907352-04cda38ebc29", "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99", "https://images.unsplash.com/photo-1465101046530-73398c7f28ca"],
  ["https://images.unsplash.com/photo-1506744038136-46273834b3fb", "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd", "https://images.unsplash.com/photo-1467987506553-8f3916508521"],
  ["https://images.unsplash.com/photo-1507089947368-19c1da9775ae", "https://images.unsplash.com/photo-1449844908441-8829872d2607", "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e"],
  ["https://images.unsplash.com/photo-1460518451285-97b6aa326961", "https://images.unsplash.com/photo-1501594907352-04cda38ebc29", "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99"],
  // ...repeat this pattern for all 50 properties, using different unsplash links for each
];
import { useNavigate } from "react-router-dom";
import "../css/ReviewTypesDetails.css";
export const demoData = Array.from({ length: 50 }, (_, i) => {
  const cities = [
    ["Chennai", "India"], ["London", "UK"], ["New York", "USA"], ["Paris", "France"], ["Tokyo", "Japan"],
    ["Sydney", "Australia"], ["Berlin", "Germany"], ["Cape Town", "South Africa"], ["Toronto", "Canada"], ["Dubai", "UAE"],
    ["Barcelona", "Spain"], ["Rome", "Italy"], ["Istanbul", "Turkey"], ["Bangkok", "Thailand"], ["Moscow", "Russia"],
    ["Rio de Janeiro", "Brazil"], ["Los Angeles", "USA"], ["San Francisco", "USA"], ["Chicago", "USA"], ["Miami", "USA"],
    ["Vancouver", "Canada"], ["Montreal", "Canada"], ["Melbourne", "Australia"], ["Auckland", "New Zealand"], ["Zurich", "Switzerland"],
    ["Vienna", "Austria"], ["Prague", "Czech Republic"], ["Budapest", "Hungary"], ["Lisbon", "Portugal"], ["Dublin", "Ireland"],
    ["Edinburgh", "Scotland"], ["Oslo", "Norway"], ["Stockholm", "Sweden"], ["Helsinki", "Finland"], ["Copenhagen", "Denmark"],
    ["Brussels", "Belgium"], ["Amsterdam", "Netherlands"], ["Warsaw", "Poland"], ["Athens", "Greece"], ["Cairo", "Egypt"],
    ["Johannesburg", "South Africa"], ["Nairobi", "Kenya"], ["Casablanca", "Morocco"], ["Lagos", "Nigeria"], ["Accra", "Ghana"],
    ["Addis Ababa", "Ethiopia"], ["Algiers", "Algeria"], ["Tunis", "Tunisia"], ["Rabat", "Morocco"]
  ];
  const [city, country] = cities[i % cities.length];
  // Use propertyImages array for custom images
  const images = propertyImages[i] || [];
  return { city, country, currency: "₹", images };
});

const priceList = [20000, 10000, 45000, 7000, 12000, 35000, 8000, 15000, 6000, 25000, 18000, 9000, 22000, 30000, 17000, 14000, 16000, 11000, 27000, 13000, 21000, 24000, 19000, 28000, 23000, 26000, 29000, 32000, 31000, 34000, 33000, 36000, 37000, 38000, 39000, 40000, 41000, 42000, 43000, 44000, 46000, 47000, 48000, 49000, 50000, 51000, 52000, 53000, 54000, 55000];

const houseCards = Array.from({ length: 50 }, (_, i) => {
  const d = demoData[i % demoData.length];
  // 50 unique descriptions for each card
  const descOptions = Array.from({ length: 50 }, (_, idx) =>
    `Property #${idx + 1} in ${d.city}, ${d.country}: ${[
      'Modern home with stylish interiors and a peaceful neighborhood.',
      'Spacious property in the heart of the city. Perfect for families and professionals.',
      'Charming residence close to parks, schools, and shopping.',
      'Luxury house featuring updated amenities and a private garden.',
      'Cozy and bright home with easy access to city attractions.',
      'Elegant living. Enjoy comfort, security, and a vibrant community.',
      'Beautifully maintained house with modern upgrades throughout.',
      'Prime location—move-in ready and full of natural light.',
      'Family-friendly home with a spacious backyard and open floor plan.',
      'Exclusive property—a rare find with premium finishes.',
      'Urban retreat with rooftop views and contemporary design.',
      'Classic architecture meets modern convenience in this home.',
      'Sunlit rooms and open concept living spaces throughout.',
      'Perfect blend of privacy and accessibility to city life.',
      'Renovated kitchen and spa-inspired bathrooms.',
      'Gated community with 24/7 security and amenities.',
      'Pet-friendly home with nearby walking trails.',
      'Energy-efficient appliances and smart home features.',
      'Large windows for natural light and scenic views.',
      'Close to public transport and major business hubs.',
      'Peaceful cul-de-sac with friendly neighbors.',
      'Ample storage and built-in wardrobes in every room.',
      'Designer finishes and custom cabinetry.',
      'Spacious balcony for outdoor entertaining.',
      'Home office space ideal for remote work.',
      'Private driveway and covered parking.',
      'Freshly painted and move-in ready.',
      'Minutes from top-rated schools and hospitals.',
      'Low-maintenance landscaping and garden area.',
      'Walk-in closets and luxury flooring.',
      'Open kitchen with breakfast bar and dining area.',
      'Quiet street with minimal traffic.',
      'Modern lighting and fixtures throughout.',
      'Separate laundry room and utility space.',
      'Flexible floor plan for growing families.',
      'High ceilings and elegant entryway.',
      'Outdoor patio for relaxing evenings.',
      'Upgraded HVAC and water systems.',
      'Close to shopping malls and entertainment.',
      'Ideal for first-time buyers or investors.',
      'Spacious master suite with ensuite bath.',
      'Community pool and fitness center access.',
      'Unique architectural details and charm.',
      'Bright and airy living spaces.',
      'Secure entry and intercom system.',
      'Easy access to highways and airports.',
      'Recently updated roof and windows.',
      'Low HOA fees and great neighborhood.',
      'Ready for your personal touch and decor.'
    ][idx % 50]}`
  );
  return {
    id: i + 1,
    image: d.images[0],
    images: d.images, // Pass all images for gallery
    title: `House #${i + 1}`,
    location: `${d.city}, ${d.country}`,
    price: `${d.currency}${priceList[i % priceList.length].toLocaleString()}`,
    beds: 2 + (i % 4),
    baths: 1 + (i % 3),
    area: `${1200 + (i * 13) % 800} sqft`,
    desc: descOptions[i % descOptions.length]
  };
});



export default function ReviewTypesDetailsPage() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const filtered = houseCards.filter(house =>
    house.title.toLowerCase().includes(search.toLowerCase()) ||
    house.location.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="review-types-details-page">
      <div className="review-types-details-content">
        <button
          className="details-close-btn"
          title="Close section"
          aria-label="Close section"
          onClick={() => navigate("/")}
        >
          ✖
        </button>
        <h2 className="details-title">All Houses</h2>
        <div className="details-search-row">
          <span className="search-icon" role="img" aria-label="search">🔍</span>
          <input
            className="details-search-input"
            type="text"
            placeholder="Search by title or location..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <button
            className="details-search-btn"
            type="button"
            aria-label="Search"
            onClick={() => {}}
          >
            Search
          </button>
        </div>
        <div className="details-list">
          {filtered.map((house, idx) => (
            <div className={"details-card animate__animated animate__fadeInUp"} style={{animationDelay: `${idx * 0.04}s`}} key={house.id}>
              <img src={house.image} alt={house.title} className="details-img animate__animated animate__fadeIn" style={{animationDelay: '0.2s'}} />
              {/* Only show one image per card, no extra images */}
              <div className="details-info">
                <h4>{house.title}</h4>
                <div className="details-location">{house.location}</div>
                <div className="details-price">{house.price}</div>
                <div className="details-meta">
                  <span className="icon-bed" title="Beds" role="img" aria-label="beds">🛏️</span>
                  <span className="meta-text">{house.beds}</span>
                  <span className="icon-sep" />
                  <span className="icon-bath" title="Baths" role="img" aria-label="baths">🚽</span>
                  <span className="meta-text">{house.baths}</span>
                  <span className="icon-sep" />
                  <span className="icon-area" title="Area" role="img" aria-label="area">📐</span>
                  <span className="meta-text">{house.area}</span>
                </div>
                <p className="details-desc">{house.desc}</p>
                <a
                  href={`/property/${house.id}`}
                  className="view-info-btn"
                  style={{ display: 'inline-block', textDecoration: 'none', color: 'inherit' }}
                >
                  View Info
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
