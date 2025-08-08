import React from 'react'
import { HiArrowSmRight } from "react-icons/hi";

function Sustain() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="container mx-auto px-12 py-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <h1 className="text-3xl font-bold text-white">INNOVX</h1>
            <div className="w-8 h-8 bg-white rounded-md"></div>
          </div>
          <nav className="hidden md:flex items-center space-x-10">
            <a href="#" className="text-white/70 hover:text-white transition-colors text-lg">About</a>
            <a href="#" className="text-white/70 hover:text-white transition-colors text-lg">Business</a>
            <a href="#" className="text-white/70 hover:text-white transition-colors text-lg">Expertise</a>
            <a href="#" className="text-white font-bold text-lg">Sustainability</a>
            <a href="#" className="text-white/70 hover:text-white transition-colors text-lg">Careers</a>
            <a href="#" className="text-white/70 hover:text-white transition-colors text-lg">Contact</a>
          </nav>
          <div className="flex items-center space-x-5">
            <div className="w-10 h-10 bg-white/30 rounded-full"></div>
            <div className="w-10 h-10 bg-white/30 rounded-full"></div>
            <div className="w-10 h-10 bg-white/30 rounded-full"></div>
            <div className="w-10 h-10 bg-white/30 rounded-full"></div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-orange-500 via-yellow-400 to-blue-600">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-9xl font-bold text-white text-center tracking-tight">
            Sustainability
          </h1>
        </div>
      </section>

      {/* Introduction Text Block */}
      <section className="py-32 px-16 bg-white relative h-screen">
        <div className="relative h-full">
          {/* Top-Left Heading */}
          <div className="absolute top-20 left-0 max-w-md">
            <h2 className="text-7xl font-bold text-gray-300 leading-[0.85]">
              Pioneering Next Industries
              <br />
              Sustainably
            </h2>
          </div>

          {/* Middle-Right Main Statement */}
          <div className="absolute top-1/3 right-0 max-w-lg">
            <p className="text-2xl font-bold text-black leading-relaxed text-right">
              At INNOVX, sustainability is a way of thinking and acting - rooted in responsibility, driven by purpose, and focused on building a better tomorrow.
            </p>
          </div>

          {/* Bottom-Right Vision Statement */}
          <div className="absolute bottom-32 right-0 max-w-lg">
            <p className="text-lg font-normal text-black leading-relaxed text-right">
              Our vision ensures that INNOVX and its ventures align with the highest Environmental, Social, and Governance (ESG) standards, driving long-term value and sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Designing Resilience Section */}
      <section className="py-20 px-8 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Construction Worker Image</span>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-black mb-6">
                Designing resilience and Value from Day One
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                We integrate resilience into every aspect of our operations, ensuring that our projects and investments are built to withstand challenges and create lasting value. Our approach combines innovative thinking with practical implementation.
              </p>
              <p className="text-lg text-gray-700">
                By embracing ESG principles from the outset, we create sustainable solutions that benefit all stakeholders while driving long-term growth and positive impact.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Concluding Statement */}
      <section className="py-20 px-8 bg-white">
        <div className="container mx-auto max-w-4xl">
          <p className="text-2xl font-bold text-black mb-4">
            At INNOVX, we lead boldly through a pragmatic yet innovative approach turning sustainability into a powerful engine for long-term growth, meaningful value creation, and lasting positive impact.
          </p>
          <p className="text-lg text-gray-700">
            Together, Driving Sustainable Growth.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-8">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <h3 className="text-2xl font-bold">INNOVX</h3>
                <div className="w-6 h-6 bg-white rounded-sm"></div>
              </div>
              <p className="text-gray-300 mb-4">Pioneering Next Industries.</p>
              <p className="text-gray-400 mb-6">123 Innovation Street<br />Tech City, TC 12345<br />contact@innovx.com</p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <span className="text-black text-sm">f</span>
                </div>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <span className="text-black text-sm">t</span>
                </div>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <span className="text-black text-sm">in</span>
                </div>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <span className="text-black text-sm">ig</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold mb-4">About Us</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white">About</a></li>
                  <li><a href="#" className="hover:text-white">Business</a></li>
                  <li><a href="#" className="hover:text-white">Expertise</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Industries</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white">Agri-Food & Water</a></li>
                  <li><a href="#" className="hover:text-white">Energy</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Legal</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white">Terms</a></li>
                  <li><a href="#" className="hover:text-white">Privacy</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">© 2023 INNOVX. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Careers Section */}
      <section className="relative h-96 bg-gray-800">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative h-full flex flex-col items-center justify-center">
          <h2 className="text-6xl font-bold text-white mb-8">Careers</h2>
          <button className="bg-black text-white px-8 py-3 rounded-full border border-white hover:bg-white hover:text-black transition-colors">
            Explore
          </button>
        </div>
      </section>
    </div>
  )
}

export default Sustain