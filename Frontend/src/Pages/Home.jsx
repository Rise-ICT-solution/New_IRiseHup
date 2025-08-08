import Header from "../Components/Home_Comp/Header"
import HeroSection from "../Components/Home_Comp/HeroSection"
import PillarApproach from "../Components/Home_Comp/PillarApproach"
import Sectors from "../Components/Home_Comp/Sectors"

function Home (){
    return <div>
        <Header />
        <HeroSection />
        <div className="mt-30 pb-[100px]">
            <PillarApproach />
        </div>
        <Sectors />
    </div>
}
export default Home