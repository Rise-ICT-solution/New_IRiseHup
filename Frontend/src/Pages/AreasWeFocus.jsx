import React, { useEffect, useRef } from 'react'
import { HiArrowSmRight } from "react-icons/hi";
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import Header from '../Components/Home_Comp/Header';

function AreasWeFocus() {
  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Handle text animations
          if (entry.target.classList.contains('animate-on-scroll') && !entry.target.classList.contains('image-container')) {
            entry.target.classList.add('animate-in');
          }
          
          // Handle image overlay animation
          if (entry.target.classList.contains('image-container')) {
            const overlay = entry.target.querySelector('.image-overlay');
            if (overlay) {
              overlay.classList.add('overlay-animate');
            }
          }
        }
      });
    }, observerOptions);

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);
  return (
    <div className="min-h-screen bg-white">
      <style>{`
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s ease-out;
        }
        
        .animate-on-scroll.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Special handling for image containers */
        .image-container.animate-on-scroll {
          opacity: 1;
          transform: none;
        }
        
        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: black;
          transform: translateX(0);
          transition: transform 1.2s ease-out;
          z-index: 10;
        }
        
        .image-overlay.overlay-animate {
          transform: translateX(-100%);
        }
      `}</style>
      {/* Header Component */}
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-orange-500 via-yellow-400 to-blue-600">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-9xl font-bold text-white text-center tracking-tight font-roboto">
            Areas We Focus
          </h1>
        </div>
      </section>

      {/* Introduction Text Block */}
      <section className="py-32 px-16 bg-white relative h-screen">
        <div className="relative h-full flex">
                     {/* Left Side - Heading */}
           <div className="w-1/2 flex items-start pt-20">
             <h2 className="text-7xl font-bold text-gray-300 leading-[0.85] animate-on-scroll font-roboto">
               Pioneering Next Industries
               <br />
               Areas We Focus
             </h2>
           </div>

          {/* Right Side - Content */}
          <div className="w-1/2 flex flex-col justify-center space-y-8">
                         {/* Main Statement */}
             <div className="max-w-lg animate-on-scroll">
               <p className="text-2xl font-bold text-black leading-relaxed font-roboto">
                 At IRISEHUB, sustainability is a way of thinking and acting - rooted in responsibility, driven by purpose, and focused on building a better tomorrow.
               </p>
             </div>

             {/* Vision Statement */}
             <div className="max-w-lg animate-on-scroll">
               <p className="text-lg font-normal text-black leading-relaxed font-roboto">
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
            <div className="mb-16 image-container animate-on-scroll">
              <div className="h-96 rounded-lg overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Construction workers in industrial setting" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black image-overlay"></div>
              </div>
            </div>
           
                       {/* Text Content Section */}
            <div className="max-w-4xl mx-auto text-left animate-on-scroll">
              <h3 className="text-3xl font-bold text-black mb-8 font-roboto">
                Designing resilience and Value from Day One
              </h3>
              <div className="space-y-6">
                <p className="text-lg text-black leading-relaxed font-roboto">
                  At IRISEHUB, our general derisking process integrates sustainability from the earliest stages of venture development. Through our "sustainable by design" approach we integrate ESG principles into every stage of business development.
                </p>
                <p className="text-lg text-black leading-relaxed font-roboto">
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
             <div className="text-center mb-16 animate-on-scroll">
               <h2 className="text-4xl font-bold text-black font-roboto">
                 Our 4 Strategic Sustainability Pillars:
               </h2>
             </div>
            
                                       {/* Forest Image Section */}
              <div className="mb-16 image-container animate-on-scroll">
                <div className="h-96 rounded-lg overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" 
                    alt="Aerial view of forest canopy" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black image-overlay"></div>
                </div>
              </div>
            
                         {/* Content Section */}
             <div className="max-w-4xl mx-auto text-left animate-on-scroll">
               <h3 className="text-2xl font-bold text-black mb-6">
                 Act for Climate: Climate Change and Carbon Impact (3C)
               </h3>
               <ul className="space-y-4">
                 <li className="flex items-start">
                   <span className="text-black mr-3 mt-2">•</span>
                   <span className="text-lg text-black leading-relaxed font-roboto">
                     Address urgency on both adaptation and mitigation of climate change.
                   </span>
                 </li>
                 <li className="flex items-start">
                   <span className="text-black mr-3 mt-2">•</span>
                   <span className="text-lg text-black leading-relaxed font-roboto">
                     Champion transition to Net-Zero and amplify low-carbon solutions.
                   </span>
                 </li>
                 <li className="flex items-start">
                   <span className="text-black mr-3 mt-2">•</span>
                   <span className="text-lg text-black leading-relaxed font-roboto">
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
               <div className="mb-16 image-container animate-on-scroll">
                 <div className="h-96 rounded-lg overflow-hidden relative">
                   <img 
                     src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                     alt="Hands holding soil and plants" 
                     className="w-full h-full object-cover"
                   />
                   <div className="absolute inset-0 bg-black image-overlay"></div>
                 </div>
               </div>
             
                           {/* Content Section */}
              <div className="max-w-4xl mx-auto text-left animate-on-scroll">
                <h3 className="text-2xl font-bold text-black mb-6">
                  Act for Circularity: Environmental Stewardship
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-black mr-3 mt-2">•</span>
                    <span className="text-lg text-black leading-relaxed font-roboto">
                      Integrate circular economy principles within project design.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-3 mt-2">•</span>
                    <span className="text-lg text-black leading-relaxed font-roboto">
                      Innovate to use water and energy more efficiently.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-3 mt-2">•</span>
                    <span className="text-lg text-black leading-relaxed font-roboto">
                      Transform industrial waste into valuable resources through innovative circular economy practices.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-3 mt-2">•</span>
                    <span className="text-lg text-black leading-relaxed font-roboto">
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
                <div className="mb-16 image-container animate-on-scroll">
                  <div className="h-96 rounded-lg overflow-hidden relative">
                    <img 
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80" 
                      alt="Professional woman in safety gear with tablet" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black image-overlay"></div>
                  </div>
                </div>
              
                             {/* Content Section */}
               <div className="max-w-4xl mx-auto text-left animate-on-scroll">
                 <h3 className="text-2xl font-bold text-black mb-6 font-roboto">
                   Act for Communities: Positive Community Impact
                 </h3>
                 <ul className="space-y-4">
                   <li className="flex items-start">
                     <span className="text-black mr-3 mt-2">•</span>
                     <span className="text-lg text-black leading-relaxed font-roboto">
                       Invest actively in initiatives supporting sustainable economic opportunities for communities.
                     </span>
                   </li>
                   <li className="flex items-start">
                     <span className="text-black mr-3 mt-2">•</span>
                     <span className="text-lg text-black leading-relaxed font-roboto">
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
                <div className="mb-16 image-container animate-on-scroll">
                  <div className="h-96 rounded-lg overflow-hidden relative">
                    <img 
                      src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80" 
                      alt="Worker installing solar panels" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black image-overlay"></div>
                  </div>
                </div>
              
                             {/* Content Section */}
               <div className="max-w-4xl mx-auto text-left animate-on-scroll">
                 <h3 className="text-2xl font-bold text-black mb-6 font-roboto">
                   Act for People: Serve our People
                 </h3>
                 <ul className="space-y-4">
                   <li className="flex items-start">
                     <span className="text-black mr-3 mt-2">•</span>
                     <span className="text-lg text-black leading-relaxed font-roboto">
                       Foster a diverse, equitable, and inclusive culture within IRISEHUB.
                     </span>
                   </li>
                   <li className="flex items-start">
                     <span className="text-black mr-3 mt-2">•</span>
                     <span className="text-lg text-black leading-relaxed font-roboto">
                       Cultivate sustainability leadership and continuous awareness among employees.
                     </span>
                   </li>
                   <li className="flex items-start">
                     <span className="text-black mr-3 mt-2">•</span>
                     <span className="text-lg text-black leading-relaxed font-roboto">
                       Prioritize employee well-being, ethical behavior, and engagement as central to our sustainability mission.
                     </span>
                   </li>
                   <li className="flex items-start">
                     <span className="text-black mr-3 mt-2">•</span>
                     <span className="text-lg text-black leading-relaxed font-roboto">
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
             <div className="mb-16 image-container animate-on-scroll">
               <div className="h-96 rounded-lg overflow-hidden relative">
                 <img 
                   src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80" 
                   alt="Hand touching solar panel with warm glow" 
                   className="w-full h-full object-cover"
                 />
                 <div className="absolute inset-0 bg-black image-overlay"></div>
               </div>
             </div>
           
                       {/* Content Section */}
            <div className="max-w-4xl mx-auto text-left animate-on-scroll">
              <p className="text-2xl font-bold text-black mb-6 font-roboto">
                At IRISEHUB, we lead boldly through a pragmatic yet innovative approach turning sustainability into a powerful engine for long-term growth, meaningful value creation, and lasting positive impact.
              </p>
              <p className="text-lg font-bold text-black font-roboto">
                Together, Driving Sustainable Growth.
              </p>
            </div>
         </div>
       </section>

                                 {/* Footer Component */}
      <Footer />

             {/* Careers Section */}
       <section className="relative h-screen bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"}}>
         <div className="absolute inset-0 bg-black/50"></div>
                   <div className="relative h-full flex flex-col items-center justify-center">
            <h2 className="text-8xl font-bold text-white mb-12 animate-on-scroll font-roboto">Community</h2>
            <Link to="/community" className="flex items-center space-x-3 bg-black text-white px-8 py-4 rounded-full hover:bg-black transition-colors animate-on-scroll group">
              <span className="font-medium font-roboto">DISCOVER</span>
              <div className="w-8 h-8 bg-white group-hover:bg-black group-hover:border-2 group-hover:border-white rounded-full flex items-center justify-center transition-all">
                <HiArrowSmRight className="text-black group-hover:text-white text-lg transition-colors" />
              </div>
            </Link>
          </div>
       </section>
    </div>
  )
}

export default AreasWeFocus