import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
import { MdDateRange } from "react-icons/md";
// Social Media icons 
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";

import AThar from "../../Images/Community-Images/Athar logo.png"
import { useEffect, useState } from "react";

function NewsMoreInfo ({data, onClose}){
    if (!data) return null; // If no data, do not render the component

    return <div  className="w-[80%] bg-black h-full overflow-hidden absolute px-10 right-0">
        {/* Top Head  */}
        <div className="overflow-y-auto px-[30px] w-full pb-[100px] h-full">
            <div className="w-full flex justify-between items-center  mt-5 ">
                <div className="flex gap-10">
                    <div className="w-[30px] h-[30px]  text-black hover:text-black flex items-center justify-center transition-all duration-300 ease-in-out hover:scale-125 overflow-hidden bg-gray-400 hover:bg-white rounded-full group"> 
                        <FaArrowLeftLong  className="text-[17px] transition-transform duration-300 ease-in-out "/> 
                    </div>
                    <div className="w-[30px] h-[30px]  text-black hover:text-black flex items-center justify-center transition-all duration-300 ease-in-out hover:scale-125 overflow-hidden bg-gray-400 hover:bg-white rounded-full group"> 
                        <FaArrowRightLong  className="text-[17px] transition-transform duration-300 ease-in-out "/> 
                    </div>
                </div>
                <div  onClick={onClose} className="w-[30px] h-[30px]  text-black hover:text-black flex items-center justify-center transition-all duration-300 ease-in-out hover:scale-125 overflow-hidden bg-gray-400 hover:bg-white rounded-full group"> 
                    <AiOutlineClose  className="text-[17px] transition-transform duration-300 ease-in-out "/> 
                </div>
            </div>
            {/* Bottom Head  */}
            <div className="flex justify-between items-center mt-10 border-b-1 border-b-gray-200 pb-5">
                <div className="flex gap-3 items-center">
                    <button className="px-8 py-[4px] text-[14px] bg-white rounded-full"> {data.Highlight} </button>
                    <div className="flex gap-1">
                        <MdDateRange className="text-white text-[19px]" />
                        <span className="text-[14px] text-white"> {data.Date} </span>
                    </div>
                </div>
                <div className={` md:hidden lg:flex  gap-5 items-center`}>
                    <div className="w-[30px] h-[30px]  text-black flex items-center justify-center transition-all duration-300 ease-in-out hover:scale-125 overflow-hidden bg-gray-400 hover:bg-white rounded-full group"> 
                        <FaLinkedinIn  className="text-[17px] transition-transform duration-300 ease-in-out "/> 
                    </div>
                    <div className="w-[30px] h-[30px]  text-black flex items-center justify-center transition-all duration-300 ease-in-out hover:scale-125 overflow-hidden bg-gray-400 hover:bg-white rounded-full group"> 
                        <FaXTwitter  className="text-[17px] transition-transform duration-300 ease-in-out "/> 
                    </div>
                    <div className="w-[30px] h-[30px]  text-black flex items-center justify-center transition-all duration-300 ease-in-out hover:scale-125 overflow-hidden bg-gray-400 hover:bg-white rounded-full group"> 
                        <IoLogoInstagram  className="text-[17px] transition-transform duration-300 ease-in-out "/> 
                    </div>
                    <div className="w-[30px] h-[30px]  text-black flex items-center justify-center transition-all duration-300 ease-in-out hover:scale-125 overflow-hidden bg-gray-400 hover:bg-white rounded-full group"> 
                        <FaFacebookF  className="text-[17px] transition-transform duration-300 ease-in-out "/> 
                    </div>
                </div>
            </div>
            {/* End Post Head  */}
            <div className="">
                <h1 className="text-white text-[45px] leading-[55px] mt-12 font-semibold "> {data.Title} </h1>
                <img className="w-full h-[500px] rounded-md object-cover mt-10" src={data.Image} alt="" />
                <div className="px-[50px] mt-10">
                    <p className="text-white text-[18px]"> {data.Description}</p>
                </div>
            </div>
        
        </div>
    </div>
}
export default NewsMoreInfo;
// INNOVX launches Athar Investment Fund: A dedicated impact Investment Fund for agriculture