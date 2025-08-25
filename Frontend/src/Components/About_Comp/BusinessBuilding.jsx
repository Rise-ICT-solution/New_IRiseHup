import { HiArrowSmRight } from "react-icons/hi";
import Building from "../../Images/About-Images/Building.jpg"
function BusinessBuilding (){
    return <div className="w-[700px] relative h-[500px] rounded-xl mt-40 overflow-hidden">
        <img className="w-full h-full  object-cover" src={Building} alt="" />
        <div className="w-full h-full absolute top-0 bg-black/30 px-10">
        <h1 className="text-[35px] text-white font-semibold leading-[40px] mt-10"> iRisehub Office <br /> 2025</h1>
        <div className="w-full h-full flex flex-col mt-28 items-center">
            <button className="primaryBtn bg-white mt-5 group  "> Play Video 
                <div className="primaryBtnArrayIcon bg-black border-black group-hover:text-black text-white group-hover:bg-transparent"> <HiArrowSmRight /> </div> 
            </button>
        </div>
        </div>
    </div>
}
export default BusinessBuilding