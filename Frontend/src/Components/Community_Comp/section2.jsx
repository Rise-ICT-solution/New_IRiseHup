import { HiArrowSmRight } from "react-icons/hi";
import { Link } from "react-router-dom";
function SectionTwo (Props){
    return <div className="flex justify-center  gap-10 mt-24">
        <div className="w-[200px] h-[200px] overflow-hidden   ">
            <img className="w-full h-full transition-all duration-500 hover:scale-110 ease-in-out object-cover" src={Props.Image} alt="" />
        </div>
        <div className="w-[800px]">
            <h1 className="text-[30px] font-semibold"> {Props.TitleOne} </h1>
            <hr className="text-gray-400 mt-5 mb-5" />
            <h2 className="text-[25px] font-semibold text-gray-400 mb-5"> {Props.TitleTwo}.</h2>
            <p> {Props.Desc}. </p>
            {Props.Btn && (
                <Link to={Props.link}>
                <button className="primaryBtn  mt-5 group text-[12px] px-14 pl-5 text-white bg-black "> {Props.Btn} 
                    <div className="primaryBtnArrayIcon w-[30px] h-[30px] bg-white border-white group-hover:text-white text-black group-hover:bg-transparent"> <HiArrowSmRight /> </div> 
                </button>
                </Link>        
            )}
            </div>
    </div>
}
export default SectionTwo