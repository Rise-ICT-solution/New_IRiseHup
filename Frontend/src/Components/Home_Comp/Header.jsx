import iRisehupLogo  from "../../Images/HomeComp-Images/iRisehubLogo.png"
import { Link } from "react-router-dom";
// Social Media icons 
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { useState } from "react";
import { PiCaretDownBold } from "react-icons/pi";
import { PiCaretUpBold } from "react-icons/pi";
import { HiBars3BottomRight } from "react-icons/hi2";


function Header () {
    const [isHoverItem, setIsHoverItem] = useState(null)
    return <div className="w-full relative">
        <div className=" w-full bg-transparent z-10 absolute h-[90px] flex justify-between items-center px-[20px] md:px-[30px]">
            <Link to="/"><img className="w-[150px] filter invert brightness-0 " src={iRisehupLogo} alt="" /></Link>
            <ul className="md:hidden lg:flex hidden gap-10 text-xl  font-semibold text-white">
                {/* About Sub menues */}
                <div className="relative" onMouseEnter={() => setIsHoverItem("about")} onMouseLeave={() => setIsHoverItem(null)}>
                    <Link to="/about"> <li className="items-center flex gap-1 mb-2"> About  <PiCaretDownBold className={`${isHoverItem === "about" ? "rotate-180 transition-transform duration-300 ease-in-out" : "rotate-0"}`} /> </li> </Link>
                    { isHoverItem === "about" && (
                    <div className={`w-[200px] py-4 px-3 transition-transform duration-10 bg-white absolute top-full left-0 rounded-md z-30 shadow-md shadow-black`}>
                    <ul className="leading-[35px]  text-[16px] font-normal text-black">
                        <li className="border-b-1 border-b-gray-200 hover:border-b-black hover:border-b-[1.5px]"> Our Team </li>
                        <li className="border-b-1 border-b-gray-200 hover:border-b-black hover:border-b-[1.5px]"> Policies </li>
                        <li className="border-b-1 border-b-gray-200 hover:border-b-black hover:border-b-[1.5px]"> Visual Identity </li>
                    </ul>
                </div>
                )}
                </div>
                {/* Ecosystem sub menues */}
                <div className="relative" onMouseEnter={() => setIsHoverItem("ecosystem")} onMouseLeave={() => setIsHoverItem(null)}>
                    <Link to="/ecosystem"> <li className="items-center flex gap-1 mb-2"> Ecosystem  <PiCaretDownBold className={`${isHoverItem === "ecosystem" ? "rotate-180 transition-transform duration-300 ease-in-out" : "rotate-0"}`} /> </li> </Link>
                    { isHoverItem === "ecosystem" && (
                    <div className={`w-[210px] py-4 px-3 transition-transform duration-10 bg-white absolute top-full left-0 rounded-md z-30 shadow-md shadow-black`}>
                    <ul className="leading-[35px] text-[16px] font-normal text-black">
                        <li className="border-b-1 border-b-gray-200 hover:border-b-black hover:border-b-[1.5px]"> Rise Academy </li>
                        <li className="border-b-1 border-b-gray-200 hover:border-b-black hover:border-b-[1.5px]"> Rise Solution </li>
                        <li className="border-b-1 border-b-gray-200 hover:border-b-black hover:border-b-[1.5px]"> Minbar </li>
                        <li className="border-b-1 border-b-gray-200 hover:border-b-black hover:border-b-[1.5px]"> Kobciye </li>
                        <li className="border-b-1 border-b-gray-200 hover:border-b-black hover:border-b-[1.5px]"> Mogadishu Tech Summit </li>
                    </ul>
                </div>
                )}
                </div>
                {/* Areas We focus */}
                <Link to="/areasWe"> <li> Areas We Focus </li> </Link>
                {/* <div className="relative" onMouseEnter={() => setIsHoverItem("community")} onMouseLeave={() => setIsHoverItem(null)}>
                    <Link to="/community"> <li className="items-center flex gap-1"> Community <PiCaretDownBold className="" /> </li> </Link>
                </div> */}
                {/* Community Sub menues */}
                <div className="relative" onMouseEnter={() => setIsHoverItem("community")} onMouseLeave={() => setIsHoverItem(null)}>
                    <Link to="/community"> <li className="items-center flex gap-1 mb-2"> Community  <PiCaretDownBold className={`${isHoverItem === "community" ? "rotate-180 transition-transform duration-300 ease-in-out" : "rotate-0"}`} /> </li> </Link>
                    { isHoverItem === "community" && (
                    <div className={`w-[200px] py-4 px-3 transition-transform duration-10 bg-white absolute top-full left-0 rounded-md z-30 shadow-md shadow-black`}>
                    <ul className="leading-[35px] text-[16px] font-normal text-black">
                        <li className="border-b-1 border-b-gray-200 hover:border-b-black hover:border-b-[1.5px]"> Events </li>
                        <li className="border-b-1 border-b-gray-200 hover:border-b-black hover:border-b-[1.5px]"> News  </li>
                        <li className="border-b-1 border-b-gray-200 hover:border-b-black hover:border-b-[1.5px]"> Newsletter </li>
                    </ul>
                </div>
                )}
                </div>
                {/* Startup */}
                <Link to="/startups"> <li> Startups </li> </Link>
            </ul>
            {/* SOcial media icons */}
            <div className="md:hidden lg:flex hidden gap-5 items-center">
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
            <HiBars3BottomRight className="lg:hidden md:text-5xl text-4xl text-white" />
        </div>
    </div>
}
export default Header