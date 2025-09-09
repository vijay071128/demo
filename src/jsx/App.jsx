import Hero from "./Hero.jsx";
import Navbar from "./Navbar.jsx";
// ...existing code...
// import React from "react";

import About from "./About.jsx";


// export default function App() {
//   return (
//     <div>
//       <Navbar />
//       <Hero />
//       {/* Leave content empty; spacing is handled by CSS */}
//       <div className="page-content"></div>
//     </div>
//   );
// }


import React from "react";


import Properties from "./Properties.jsx";


import Reviews from "./Reviews.jsx";


import ReviewTypes from "./ReviewTypes.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
  <About />
  <Properties />
  <Reviews />
  <ReviewTypes />
    </>
  );
}




