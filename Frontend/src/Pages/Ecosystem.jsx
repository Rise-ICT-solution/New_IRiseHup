// src/Pages/Ecosystem.jsx

import React from "react";
import HeroSection from "../Components/Home_Comp/HeroSection";
import Header from "../Components/Home_Comp/Header";

function Ecosystem() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Header */}
      <Header />

      {/* Text under the Header */}
      <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
        <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
          We are building a diversified portfolio of over 30 ventures across three strategic sectors. <br />
          Each business is embedded in a connected ecosystem to maximize innovation, efficiency, and sustainability.
        </p>
      </div>
    </div>
  );
}

export default Ecosystem;
