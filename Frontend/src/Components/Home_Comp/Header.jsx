/* eslint-disable no-unused-vars */
import iRisehupLogo  from "../../Images/HomeComp-Images/iRisehubLogo.png"
import { Link } from "react-router-dom";
// Social Media icons 
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { useState } from "react";


function Header () {
    const [isIconHover, setIsIconHover] = useState(false)
    return <div className="w-full bg-transparent z-10 absolute  h-[90px] flex justify-between items-center px-[30px]">
            <img className="w-[150px] filter invert brightness-0 " src={iRisehupLogo} alt="" />
            <ul className="flex gap-10 text-xl font-semibold text-white">
                <Link> <li> About </li> </Link>
                <Link to="/ecosystem"> <li> Ecosystem </li> </Link>
                <Link to="/sustain"> <li> Areas We Focus </li> </Link>
                <Link> <li> Community </li> </Link>
                <Link> <li> Startups </li> </Link>
            </ul>
            <div className="flex gap-5 items-center">
                <div className="w-[30px] h-[30px]  text-black hover:text-white flex items-center justify-center transition-all duration-300 ease-in-out hover:scale-125 overflow-hidden bg-white hover:bg-black rounded-full group"> 
                    <FaLinkedinIn  className="text-[17px] transition-transform duration-300 ease-in-out "/> 
                </div>
                <div className="w-[30px] h-[30px]  text-black hover:text-white flex items-center justify-center transition-all duration-300 ease-in-out hover:scale-125 overflow-hidden bg-white hover:bg-black rounded-full group"> 
                    <FaXTwitter  className="text-[17px] transition-transform duration-300 ease-in-out "/> 
                </div>
                <div className="w-[30px] h-[30px]  text-black hover:text-white flex items-center justify-center transition-all duration-300 ease-in-out hover:scale-125 overflow-hidden bg-white hover:bg-black rounded-full group"> 
                    <IoLogoInstagram  className="text-[17px] transition-transform duration-300 ease-in-out "/> 
                </div>
                <div className="w-[30px] h-[30px]  text-black hover:text-white flex items-center justify-center transition-all duration-300 ease-in-out hover:scale-125 overflow-hidden bg-white hover:bg-black rounded-full group"> 
                    <FaFacebookF  className="text-[17px] transition-transform duration-300 ease-in-out "/> 
                </div>
            </div>
    </div>
}
export default Header