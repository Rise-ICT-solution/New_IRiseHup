import BottomPage from "../Components/Home_Comp/BottomPage"
import Footer from "../Components/Footer"
import Header from "../Components/Home_Comp/Header"
import HeroSection from "../Components/Home_Comp/HeroSection"
import NewsEvents from "../Components/Home_Comp/NewsEvents"
import PillarApproach from "../Components/Home_Comp/PillarApproach"
import Section4 from "../Components/Home_Comp/Section4"
import Sectors from "../Components/Home_Comp/Sectors"

function Home (){
    return <div>
        <Header />
        <HeroSection />
        <div className="mt-30 pb-[100px]">
            <PillarApproach />
        </div>
        <Sectors />
        <Section4 />
        <NewsEvents />
        <Footer />
        <BottomPage />
    </div>
}
export default Home