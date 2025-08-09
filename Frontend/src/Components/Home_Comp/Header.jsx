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




function Header () {
    const [isHoverItem, setIsHoverItem] = useState(null)
    const DropDownItems = {
        about : { ml : "left-62", items : ["Our Team", "Policies", "Visual Identity"]},
        ecosystem : { ml : "left-92", items : ["Rise Academy", "Rise Solution", "Minbar", "Kobciye", "Mogadishu Tech Summit"]},
        community : { ml : "left-184", items : ["Events", "News","Newsletter"]},
    }
    return <div className="w-full relative">
        <div className=" w-full bg-transparent z-10 absolute h-[90px] flex justify-between items-center px-[30px]">
            <Link to="/"><img className="w-[150px] filter invert brightness-0 " src={iRisehupLogo} alt="" /></Link>
            <ul className="flex gap-10 text-xl font-semibold text-white">
                <div className="relative" onMouseEnter={() => setIsHoverItem("about")} onMouseLeave={() => setIsHoverItem(null)}>
                    <Link to="/about"> <li className="items-center flex gap-1"> About <PiCaretDownBold className="" /> </li> </Link>
                </div>
                <div className="relative" onMouseEnter={() => setIsHoverItem("ecosystem")} onMouseLeave={() => setIsHoverItem(null)}>
                    <Link to="/ecosystem"> <li className="items-center flex gap-1"> Ecosystem <PiCaretDownBold className="" /> </li> </Link>
                </div>
                <Link to="/areasWe"> <li> Areas We Focus </li> </Link>
                <div className="relative" onMouseEnter={() => setIsHoverItem("community")} onMouseLeave={() => setIsHoverItem(null)}>
                    <Link to="/community"> <li className="items-center flex gap-1"> Community <PiCaretDownBold className="" /> </li> </Link>
                </div>
                <Link to="/startups"> <li> Startups </li> </Link>
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
        { isHoverItem && DropDownItems[isHoverItem] && (
            <div className={`w-[200px] py-4 px-3  bg-white absolute top-16 ${DropDownItems[isHoverItem].ml} rounded-md z-20 shadow-md shadow-black`}>
            <ul className="leading-[35px]">
                { DropDownItems[isHoverItem].items.map((item,index) => (
                    <li key={index} className="border-b-1 border-b-gray-200 hover:border-b-black hover:border-b-[1.5px]"> {item} </li>
                ))}
            </ul>
        </div>
        )}
    </div>
}
export default Header