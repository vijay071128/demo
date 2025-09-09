import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import ReviewTypesDetailsPage from "./ReviewTypesDetailsPage.jsx";
import PropertyDetails from "./PropertyDetails.jsx";

export default function RootRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/review-types-details" element={<ReviewTypesDetailsPage />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
