import React from 'react'
import { HiArrowSmRight } from "react-icons/hi";
import PublicHeroSection from '../Components/PublicHeroSection';
import Footer from '../Components/Footer';
import BottomPage from '../Components/Home_Comp/BottomPage';

function AreasWeFocus() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero section */}
      <PublicHeroSection />
      {/* Introduction Text Block */}
      <section className="py-32 px-16 bg-white relative h-screen">
        <div className="relative h-full flex">
          {/* Left Side - Heading */}
          <div className="w-1/2 flex items-start pt-20">
            <h2 className="text-7xl font-bold text-gray-300 leading-[0.85]">
              Pioneering Next Industries
              <br />
              Sustainably
            </h2>
          </div>

          {/* Right Side - Content */}
          <div className="w-1/2 flex flex-col justify-center space-y-8">
            {/* Main Statement */}
            <div className="max-w-lg">
                             <p className="text-2xl font-bold text-black leading-relaxed">
                 At IRISEHUB, sustainability is a way of thinking and acting - rooted in responsibility, driven by purpose, and focused on building a better tomorrow.
               </p>
            </div>

            {/* Vision Statement */}
            <div className="max-w-lg">
                             <p className="text-lg font-normal text-black leading-relaxed">
                 Our vision ensures that IRISEHUB and its ventures align with the highest Environmental, Social, and Governance (ESG) standards, driving long-term value and sustainable growth.
               </p>
            </div>
          </div>
        </div>
      </section>

             {/* Designing Resilience Section */}
       <section className="py-20 px-8 bg-white">
         <div className="container mx-auto max-w-6xl">
                       {/* Image Section */}
            <div className="mb-16">
              <div className="h-96 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Construction workers in industrial setting" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
           
           {/* Text Content Section */}
           <div className="max-w-4xl mx-auto text-left">
             <h3 className="text-3xl font-bold text-black mb-8">
               Designing resilience and Value from Day One
             </h3>
             <div className="space-y-6">
                               <p className="text-lg text-black leading-relaxed">
                  At IRISEHUB, our general derisking process integrates sustainability from the earliest stages of venture development. Through our "sustainable by design" approach we integrate ESG principles into every stage of business development.
                </p>
               <p className="text-lg text-black leading-relaxed">
                 By incorporating ESG criteria into due diligence, risk assessment, and decision-making frameworks, we proactively address regulatory, environmental, and social risks while unlocking opportunities and responding pragmatically to our stakeholders' expectations.
               </p>
             </div>
           </div>
         </div>
       </section>

               {/* Strategic Sustainability Pillars Section */}
        <section className="py-20 px-8 bg-white">
          <div className="container mx-auto max-w-6xl">
            {/* Main Title */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-black">
                Our 4 Strategic Sustainability Pillars:
              </h2>
            </div>
            
                         {/* Forest Image Section */}
             <div className="mb-16">
               <div className="h-96 rounded-lg overflow-hidden">
                 <img 
                   src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" 
                   alt="Aerial view of forest canopy" 
                   className="w-full h-full object-cover"
                 />
               </div>
             </div>
            
            {/* Content Section */}
            <div className="max-w-4xl mx-auto text-left">
              <h3 className="text-2xl font-bold text-black mb-6">
                Act for Climate: Climate Change and Carbon Impact (3C)
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-black mr-3 mt-2">•</span>
                  <span className="text-lg text-black leading-relaxed">
                    Address urgency on both adaptation and mitigation of climate change.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-3 mt-2">•</span>
                  <span className="text-lg text-black leading-relaxed">
                    Champion transition to Net-Zero and amplify low-carbon solutions.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-3 mt-2">•</span>
                  <span className="text-lg text-black leading-relaxed">
                    Proactively manage our climate impact through GHG (Greenhouse Gases) mitigation, renewable energies and non-conventional water resources.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

                 {/* Act for Circularity Section */}
         <section className="py-20 px-8 bg-white">
           <div className="container mx-auto max-w-6xl">
                           {/* Earth Image Section */}
              <div className="mb-16">
                <div className="h-96 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="Hands holding soil and plants" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
             
             {/* Content Section */}
             <div className="max-w-4xl mx-auto text-left">
               <h3 className="text-2xl font-bold text-black mb-6">
                 Act for Circularity: Environmental Stewardship
               </h3>
               <ul className="space-y-4">
                 <li className="flex items-start">
                   <span className="text-black mr-3 mt-2">•</span>
                   <span className="text-lg text-black leading-relaxed">
                     Integrate circular economy principles within project design.
                   </span>
                 </li>
                 <li className="flex items-start">
                   <span className="text-black mr-3 mt-2">•</span>
                   <span className="text-lg text-black leading-relaxed">
                     Innovate to use water and energy more efficiently.
                   </span>
                 </li>
                 <li className="flex items-start">
                   <span className="text-black mr-3 mt-2">•</span>
                   <span className="text-lg text-black leading-relaxed">
                     Transform industrial waste into valuable resources through innovative circular economy practices.
                   </span>
                 </li>
                 <li className="flex items-start">
                   <span className="text-black mr-3 mt-2">•</span>
                   <span className="text-lg text-black leading-relaxed">
                     Minimize environmental impact by maximizing the reuse and recovery of resources in closed-loop solutions.
                   </span>
                 </li>
               </ul>
             </div>
           </div>
         </section>

                   {/* Act for Communities Section */}
          <section className="py-20 px-8 bg-white">
            <div className="container mx-auto max-w-6xl">
                             {/* Worker Image Section */}
               <div className="mb-16">
                 <div className="h-96 rounded-lg overflow-hidden">
                   <img 
                     src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80" 
                     alt="Professional woman in safety gear with tablet" 
                     className="w-full h-full object-cover"
                   />
                 </div>
               </div>
              
              {/* Content Section */}
              <div className="max-w-4xl mx-auto text-left">
                <h3 className="text-2xl font-bold text-black mb-6">
                  Act for Communities: Positive Community Impact
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-black mr-3 mt-2">•</span>
                    <span className="text-lg text-black leading-relaxed">
                      Invest actively in initiatives supporting sustainable economic opportunities for communities.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-3 mt-2">•</span>
                    <span className="text-lg text-black leading-relaxed">
                      Champion human rights, community engagement, and inclusive local growth.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Act for People Section */}
          <section className="py-20 px-8 bg-white">
            <div className="container mx-auto max-w-6xl">
                             {/* Solar Panel Worker Image Section */}
               <div className="mb-16">
                 <div className="h-96 rounded-lg overflow-hidden">
                   <img 
                     src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80" 
                     alt="Worker installing solar panels" 
                     className="w-full h-full object-cover"
                   />
                 </div>
               </div>
              
              {/* Content Section */}
              <div className="max-w-4xl mx-auto text-left">
                <h3 className="text-2xl font-bold text-black mb-6">
                  Act for People: Serve our People
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-black mr-3 mt-2">•</span>
                                         <span className="text-lg text-black leading-relaxed">
                       Foster a diverse, equitable, and inclusive culture within IRISEHUB.
                     </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-3 mt-2">•</span>
                    <span className="text-lg text-black leading-relaxed">
                      Cultivate sustainability leadership and continuous awareness among employees.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-3 mt-2">•</span>
                    <span className="text-lg text-black leading-relaxed">
                      Prioritize employee well-being, ethical behavior, and engagement as central to our sustainability mission.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-3 mt-2">•</span>
                    <span className="text-lg text-black leading-relaxed">
                      Provide a safe workplace for our colleagues and contractors.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>



             {/* Concluding Statement */}
       <section className="py-20 px-8 bg-white">
         <div className="container mx-auto max-w-6xl">
                       {/* Solar Panel Hand Image Section */}
            <div className="mb-16">
              <div className="h-96 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80" 
                  alt="Hand touching solar panel with warm glow" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
           
           {/* Content Section */}
           <div className="max-w-4xl mx-auto text-left">
                           <p className="text-2xl font-bold text-black mb-6">
                At IRISEHUB, we lead boldly through a pragmatic yet innovative approach turning sustainability into a powerful engine for long-term growth, meaningful value creation, and lasting positive impact.
              </p>
             <p className="text-lg font-bold text-black">
               Together, Driving Sustainable Growth.
             </p>
           </div>
         </div>
       </section>

        <Footer />
             {/* Careers Section */}
      <BottomPage />
    </div>
  )
}

export default AreasWeFocus