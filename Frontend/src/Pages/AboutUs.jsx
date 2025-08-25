import BusinessBuilding from "../Components/About_Comp/BusinessBuilding"
import Introduction from "../Components/About_Comp/Intro"
import OurApproach from "../Components/About_Comp/OurApproach"
import Ourvalues from "../Components/About_Comp/OurValues"
import Footer from "../Components/Footer"
import BottomPage from "../Components/Home_Comp/BottomPage"
import PublicHeroSection from "../Components/PublicHeroSection"

function AboutUs (){
    return <div className="w-full max-h-screen relative scroll-smooth">
        <PublicHeroSection />
        <div className="flex gap-4 w-full ">
            {/* Fixed part */}
            <div className="mt-[120px] sticky top-[120px] self-start  w-[12%] ml-10">
                <ul className="leading-[40px]">
                    <li className="flex items-center text-gray-400 text-[14px] hover:text-black gap-2"> <div className="w-[7px] h-[7px] bg-black rounded-full"></div> <span className="hover:underline decoration-1 hover:underline-offset-6 " > Introduction </span> </li>
                    <li className="flex items-center text-gray-400 text-[14px] hover:text-black gap-2"> <div className="w-[7px] h-[7px] bg-black rounded-full"></div> <span className="hover:underline decoration-1 hover:underline-offset-6 " > Business Building </span> </li>
                    <li className="flex items-center text-gray-400 text-[14px] hover:text-black gap-2"> <div className="w-[7px] h-[7px] bg-black rounded-full"></div> <span className="hover:underline decoration-1 hover:underline-offset-6 " > Our Approach </span> </li>
                    <li className="flex items-center text-gray-400 text-[14px] hover:text-black gap-2"> <div className="w-[7px] h-[7px] bg-black rounded-full"></div> <span className="hover:underline decoration-1 hover:underline-offset-6 " > Our Values </span> </li>
                </ul>
            </div>
            {/* moving part  */}
            <div className="w-[88%] ">
                <Introduction />
                <BusinessBuilding />
                <OurApproach />
            </div>
        </div>
            <Ourvalues />
        <Footer />
        <BottomPage />
    </div>
}
export default AboutUs