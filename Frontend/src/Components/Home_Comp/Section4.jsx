import WomanTablet from "../../Images/HomeComp-Images/Section4Summit.jpg"
import { HiArrowSmRight } from "react-icons/hi";

function Section4 (){
    return <div className="w-full pt-50 flex flex-col items-center relative justify-center ">
        <div className="w-[700px] h-[450px] overflow-hidden group rounded-2xl">
            <img className=" w-full h-full  transition-all duration-300 group-hover:scale-110 ease-in-out object-cover" src={WomanTablet} alt="" />
        </div>
        <div className="w-[700px] mt-22 ml-50">
            <h1 className="text-gray-500 font-semibold text-[22px]"> Join our culture of impact and collaboration </h1>
            <h2 className="text-[30px] font-semibold leading-[40px] mt-4"> Our 'X' symbolizes our culture and commitment to impact, collaboration, and values. </h2>
            <p className="mt-4"> We thrive on audacious exploration, collective power, and a relentless pursuit of excellence. Together, we break barriers and create businesses that redefine the future. </p>
            <button className="primaryBtn bg-black mt-7 group text-white py-4 text-[15px] pl-5 "> CAREERS 
                <div className="primaryBtnArrayIcon bg-white border-white group-hover:text-white text-black group-hover:bg-transparent"> <HiArrowSmRight /> </div> 
            </button>
        </div>
    </div>
}
export default Section4