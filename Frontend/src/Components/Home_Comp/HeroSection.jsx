// Hero section images 
import Hero1 from "../../Images/HomeComp-Images/Hero1.jpg"
import Hero2 from "../../Images/HomeComp-Images/Hero2.jpg"
import Hero3 from "../../Images/HomeComp-Images/Hero3.jpg"
import Hero4 from "../../Images/HomeComp-Images/Hero4.jpg"
import Hero5 from "../../Images/HomeComp-Images/Hero5.jpg"
import Hero6 from "../../Images/HomeComp-Images/Hero6.jpg"
import Hero7 from "../../Images/HomeComp-Images/Hero7.jpg"
import Hero8 from "../../Images/HomeComp-Images/Hero8.jpg"
import Hero9 from "../../Images/HomeComp-Images/Hero9.jpg"
import Hero10 from "../../Images/HomeComp-Images/Hero10.jpg"
// Arrow
import { HiArrowSmRight } from "react-icons/hi";
import { useEffect, useState } from "react"

function HeroSection (){
    const HeroSectionImages = [
        Hero1,Hero2,Hero3,Hero4,Hero5,Hero6,Hero7,Hero8,Hero9,Hero10,
    ]
    const [index, setIndex] = useState(0);
    const [ClockLikeRotate, setClockLikeRotate] = useState(0);
   useEffect (() => {
    const interval = setInterval(() => {
        setIndex((prevIndex) => prevIndex === HeroSectionImages.length -1 ? 0 : prevIndex + 1);
        setClockLikeRotate((prevDeg) => prevDeg + 6 )
    }, 2000);
    return () => clearInterval(interval)
   },[HeroSectionImages.length])

    return <div className="w-full flex items-center flex-col h-[700px] relative top-0">
            <img className="w-full h-full transition-all duration-300 ease-in-out object-cover" src={HeroSectionImages[index]} alt="" />
            <div className="w-full h-full object-cover bg-black/10 top-0 absolute"></div>
        <div className="w-[600px] z-1 absolute top-40">
            <h1 className="text-[80px] text-white font-bold leading-[100px] "> Pioneering next industries </h1>
            <p className="text-[22px] text-white  mt-5"> iRisehub is a community of disruptors and dreamers, fostering innovation, entrepreneurship, and technology to build a thriving future for Somalia </p>
            <button className="primaryBtn bg-white mt-5 group "> Play Video 
                <div className="primaryBtnArrayIcon bg-black border-black group-hover:text-black text-white group-hover:bg-transparent"> <HiArrowSmRight /> </div> 
            </button>
        </div>
        {/* Mirror sec */}
        <div style={{ transform:  `rotate(${ClockLikeRotate}deg) skewX(-39deg)` }} class="relative w-[230px] h-[230px] duration-100 skew-x-[-39deg] -mt-100 bg-white/10 backdrop-blur-[5px] transform origin-center animate-clocktick">
        </div>
        {/* <div class="relative w-[230px] h-[230px] skew-x-[-39deg] -mt-100 bg-white/10 backdrop-blur-[5px] transform origin-center animate-clocktick">
        </div> */}

    </div>
}
export default HeroSection