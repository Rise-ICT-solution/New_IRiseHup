import { FaRegCalendar } from "react-icons/fa6";
import Solar from "../../Images/HomeComp-Images/Solar.jpg"
import Agri from "../../Images/HomeComp-Images/Agriculture.jpg"
import VR from "../../Images/HomeComp-Images/VR.jpg"
import Factory from "../../Images/HomeComp-Images/Factory.jpg"
import { useEffect, useState } from "react";
function NewsEvents (){
    const EventInfo = [
        {
            Highlight : "Pioneers Podcasts",
            Title : "PIONEERS — the podcast by INNOVX that explores innovation and its impact across industries",
            Image : VR,
            Date : "22/07/2025"
        },
        {
            Highlight : "Press release",
            Title : "MAVA hosts the 3rd edition of the Africa Forum on Investment in Agricultural Value Chains",
            Image : Agri,
            Date : "10/07/2025"
        },
        {
            Highlight : "Corporate",
            Title : "International Women's Day - Culture where every voice counts",
            Image : Solar,
            Date : "22/07/2025"
        },
        {
            Highlight : "Pioneers Podcasts",
            Title : "INNOVX launches Athar Investment Fund: A dedicated impact Investment Fund for agriculture",
            Image : Factory,
            Date : "22/07/2025"
        },
    ]
    const [CurrentEvent, setCurrentEvent]  = useState(0)
    useEffect(() => {
        const Interval = setInterval(() => {
            setCurrentEvent((prev) => (prev + 1) % EventInfo.length)
        },3000)
        return () => clearInterval(Interval)
    },[EventInfo.length])
    return <div className="bg-[#F3F4F4] flex justify-center  flex-col items-center  px-[30px] pt-20 w-full h-[600px] mt-20">
        <div className="w-full flex  justify-between">
                {
                    EventInfo.map((event,index) => {
                        return <div key={index} className="w-[280px] h-[400px] relative bg-white p-3 group rounded-md hover:bg-black ">
                                    <div className=" w-[130px] h-[30px] text-[12px] mt-3 border-1 group-hover:border-none group-hover:bg-gray-400 group-hover:text-white border-black rounded-full items-center flex justify-center"> {event.Highlight}</div>
                                        <h1 className="text-[16px] text-gray-600 mt-5 font-semibold group-hover:text-white "> {event.Title} </h1>
                                        <div className="absolute w-full items-center bottom-4  flex">
                                            {/* date */}
                                            <div className="flex gap-2 items-center -ml-9 rotate-270 mt-10 ">
                                                <FaRegCalendar className="text-[14px] group-hover:text-white rotate-90" />
                                                <h1 className="text-[14px] text-gray-400"> {event.Date} </h1>
                                            </div>
                                            <div className="w-[180px] relative left-5 h-[140px]">
                                                <img className="w-full h-full absolute object-cover rounded-md  " src={event.Image} alt="" />
                                            </div>
                                        </div>
                                </div>
                                })
                                }
            
        </div>
        <div className=" flex gap-3  mt-12 ">
            <div className="w-[20px] h-[6px] rounded-full bg-white hover:bg-black"></div>
            <div className="w-[20px] h-[6px] rounded-full bg-white hover:bg-black"></div>
            <div className="w-[20px] h-[6px] rounded-full bg-white hover:bg-black"></div>
            <div className="w-[20px] h-[6px] rounded-full bg-white hover:bg-black"></div>
        </div>
    </div>
}
export default NewsEvents