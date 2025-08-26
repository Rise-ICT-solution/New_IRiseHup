// <<<<<<< HEAD
import Footer from "../Components/Footer"
import BottomPage from "../Components/Home_Comp/BottomPage"
import PublicHeroSection from "../Components/PublicHeroSection"

// function Ecosystem (){
    // return <div>
        {/* <PublicHeroSection />
        <h1> Ecosystem</h1>
        <Footer />
        <BottomPage /> */}
// =======
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import HeroSection from "../Components/Home_Comp/HeroSection";
import Header from "../Components/Home_Comp/Header";

// Logos
import tourbaLogo from "../Images/HomeComp-Images/tourba-logo.png";
import aradinovLogo from "../Images/HomeComp-Images/aradinov-logo.png";
import nutribiotekLogo from "../Images/HomeComp-Images/nutribiotek-logo.png";
import agriedgeLogo from "../Images/HomeComp-Images/agriedge-logo.png";

// Icons
import { FaTint } from "react-icons/fa"; // Water icon
import { GiPlantSeed } from "react-icons/gi"; // Agriculture icon

function Ecosystem() {
  const [isSectorsOpen, setIsSectorsOpen] = useState(false);
  const [isRecentOpen, setIsRecentOpen] = useState(false);
  const [selectedSector, setSelectedSector] = useState("All");
  const cardRefs = useRef([]);

  const handleSectorsClick = () => {
    setIsSectorsOpen(!isSectorsOpen);
    setIsRecentOpen(false);
  };

  const handleRecentClick = () => {
    setIsRecentOpen(!isRecentOpen);
    setIsSectorsOpen(false);
  };

  const companies = [
    {
      id: 1,
      logo: tourbaLogo,
      name: "Tourba",
      category: "IRISE HUB",
      description:
        "Accelerating farmers' transition to conservation agriculture through carbon farming strategies.",
    },
    {
      id: 2,
      logo: aradinovLogo,
      name: "Aradinov",
      category: "RISE ACADEMY",
      description:
        "Innovative and advanced agricultural solutions in arid lands to contribute to food security.",
    },
    {
      id: 3,
      logo: nutribiotekLogo,
      name: "Nutribiotek",
      category: "RISE SOLUTIONS",
      description:
        "The development of agrochemical products to contribute to promising growth drivers in the agriculture...",
    },
    {
      id: 4,
      logo: agriedgeLogo,
      name: "AgriEdge",
      category: "MINBAR",
      description: "Transforming data into nutrients",
    },
  ];

  const filteredCompanies =
    selectedSector === "All"
      ? companies
      : companies.filter((c) => c.category === selectedSector);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
          } else {
            entry.target.classList.remove("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((card) => card && observer.observe(card));
    return () =>
      cardRefs.current.forEach((card) => card && observer.unobserve(card));
  }, []);

  return (
    <div className="relative">
      <PublicHeroSection />

      {/* Qoraalka sare */}
      <div className="py-10 text-black  px-4">
        <p className="text-2xl md:text-2xl font-semibold  max-w-3xl mx-auto">

We collaborate with global partners to build a resilient, prosperous Somalia through skills training, civic engagement, and more. Here are some of our programs:
        </p>
      </div>

      {/* Dropdowns */}
      <div className="flex flex-wrap justify-center gap-4 px-4 mb-10">
        {/* All Sectors */}
        <div className="relative inline-block text-left">
          <button
            onClick={handleSectorsClick}
            className="inline-flex justify-between w-60 rounded-full border border-gray-300 px-4 py-2 bg-white text-sm font-medium shadow-sm"
          >
            {selectedSector === "All" ? "All sectors" : selectedSector}
            <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M5.5 7l4.5 4.5L14.5 7z" />
            </svg>
          </button>
          {isSectorsOpen && (
            <div className="absolute mt-2 w-60 rounded-md shadow-lg bg-white border z-10">
              {["All", "IRISE HUB", "RISE ACADEMY", "RISE SOLUTIONS", "MINBAR"].map((sector) => (
                <button
                  key={sector}
                  onClick={() => {
                    setSelectedSector(sector);
                    setIsSectorsOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                >
                  {sector}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Most Recent */}
        <div className="relative inline-block text-left">
          <button
            onClick={handleRecentClick}
            className="inline-flex justify-between w-60 rounded-full border border-gray-300 px-4 py-2 bg-white text-sm font-medium shadow-sm"
          >
            Most recent
            <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M5.5 7l4.5 4.5L14.5 7z" />
            </svg>
          </button>
          {isRecentOpen && (
            <div className="absolute mt-2 w-60 rounded-md shadow-lg bg-white border z-10">
              <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                Most recent
              </button>
              <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                Alphabetical
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Company Cards */}
      <div className="px-4 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCompanies.map((company, index) => (
            <div
              key={company.id}
              ref={(el) => (cardRefs.current[index] = el)}
              className="bg-white rounded-xl shadow p-6 flex flex-col justify-between transition-all duration-700 transform opacity-0 translate-y-8 hover:scale-105" //Halkan waye madaxa single box
            >
              <div className="flex items-start mb-4">
                <div className="w-[90px] h-[90px] bg-white border mr-4 overflow-hidden flex items-center justify-center">
                  <img
                    src={company.logo}
                    alt={`${company.name} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{company.name}</h3>
                  <div className="flex items-center gap-2 mt-1 text-gray-600 text-sm">
                    <FaTint className="text-[#00bcd4]" />
                    <GiPlantSeed className="text-green-600" />
                    <span className="uppercase">{company.category}</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-sm">{company.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
      <BottomPage />
    </div>
  );
}

export default Ecosystem;
