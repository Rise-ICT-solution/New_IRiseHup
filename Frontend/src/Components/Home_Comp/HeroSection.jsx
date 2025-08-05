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

function HeroSection (){
    return <div className="w-full flex items-center flex-col h-[700px] absolute top-0">
        <img className="w-full h-full object-cover" src={Hero1} alt="" />
        <div className="w-[600px] z-10 absolute top-40">
            <h1 className="text-[80px] text-white font-bold leading-[100px] "> Pioneering next industries </h1>
            <p className="text-[22px] text-white mt-5"> iRisehub is a community of disruptors and dreamers, fostering innovation, entrepreneurship, and technology to build a thriving future for Somalia </p>
            <button className="w-[180px] h-[50px] pl-7 mt-5 bg-white rounded-4xl flex relative items-center group transition-all duration-300 ease-in-out hover:scale-110 "> Play Video <div className="w-10 h-10 bg-black group-hover:bg-transparent group-hover:border-2 border-black group-hover:text-black absolute right-2 rounded-full flex items-center text-white text-[25px] justify-center"> <HiArrowSmRight /> </div> </button>
        </div>
        {/* Mirror sec */}
        <div class="relative w-[230px] h-[230px] skew-x-[-39deg] -mt-100 bg-white/10 backdrop-blur-[5px] transform origin-center animate-clocktick">
        </div>

    </div>
}
export default HeroSection