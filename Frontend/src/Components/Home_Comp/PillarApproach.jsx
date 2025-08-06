import { useEffect, useState } from "react";
import Hero2 from "../../Images/HomeComp-Images/Hero2.jpg"
import Hero4 from "../../Images/HomeComp-Images/Hero4.jpg"
import Hero6 from "../../Images/HomeComp-Images/Hero6.jpg"
import { HiArrowSmRight } from "react-icons/hi";
import { Link } from "react-router-dom";

function PillarApproach(){
    const Data = [
        {
            Image: Hero2, 
            Title : "Build Thriving Businesses",
            Desc : "We are a group of passionate individuals, experts, and creatives working together to create transformative solutions for the world's most challenging problems.", 
            Link : "#"
        },
        {
            Image: Hero4, 
            Title : "Invest in Innovation",
            Desc : "We are a group of passionate individuals, experts, and creatives working together to create transformative solutions for the world's most challenging problems.", 
            Link : "#"
        },
        {
            Image: Hero6, 
            Title : "Develop Ecosystem",
            Desc : "We are a group of passionate individuals, experts, and creatives working together to create transformative solutions for the world's most challenging problems.", 
            Link : ""
        },
    ]
    const [index,setIndex] = useState(0)
    useEffect (() => {
        const Interval = setInterval(() => {
            setIndex((prevIndex) => prevIndex === Data.length -1 ? 0 : prevIndex + 1);
        },4000)
    },[Data.length])
    const Current = Data[index]
    return <div className="w-full px-[80px] ">
        {/* top section */}
        <div className="w-full flex justify-center  relative">
            <div className="w-[220px] h-[220px]  skew-[-20deg] rotate-12 bg-gray-400/20 "></div>
            <div className="w-[600px] mt-7 -ml-10  ">
                <h1 className="font-bold text-[30px] text-gray-400"> Our 3-Pillar Approach </h1>
                <p className="font-semibold text-[30px] mt-5 leading-[40px]"> We turn bold visions into high-impact ventures. Our unique model relies on three strategic pillars:</p>
            </div>
        </div>
        {/* Images section */}
        <div className="w-full h-[800px] relative rounded-2xl  overflow-hidden justify-center flex mt-22">
            <img className="w-full transition-all duration-800 ease-in-out h-full object-cover" src={Current.Image} alt="" />
            <div className="bg-black/20 w-full h-full object-cover  flex flex-col justify-center items-center  absolute top-0 ">
                <div className=" w-[650px] flex flex-col items-center text-center ">
                    <div className="flex">
                        <h1 className="text-[40px] uppercase font-bold text-center text-white"> {Current.Title}</h1>
                        <div className="w-[70px] -ml-10 h-[70px] border-[1.5px] border-white/80 skew-x-[-20deg] "></div>
                    </div>
                    <p className="text-[21px] mt-10 text-white"> {Current.Desc}. </p>
                </div>
                    <Link to={Current.Link} >
                        <button className="primaryBtn bg-black text-white mt-7 group "> DISCOVER OUR UNIQUE MODE 
                            <div className="primaryBtnArrayIcon bg-white border-white group-hover:text-white text-black group-hover:bg-transparent"> <HiArrowSmRight /> </div> 
                        </button>
                    </Link>
                    <div className="flex gap-10 justify-between absolute bottom-20">
                    {Data.map((item,index) => (
                        <div className={` w-[150px] text-center text-white font-semibold leading-[20px] pb-2 border-b-4  ${ item === Current ? "border-black " : "border-b-white"} `}>
                            <h1> {item.Title} </h1>
                        </div>
                    ))}
                    </div>
            </div>
        </div>
    </div>
}
export default PillarApproach