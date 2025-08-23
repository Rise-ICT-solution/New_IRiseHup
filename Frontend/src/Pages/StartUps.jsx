import Footer from "../Components/Footer"
import BottomPage from "../Components/Home_Comp/BottomPage"
import PublicHeroSection from "../Components/PublicHeroSection"
import Section1 from "../Components/StartUps_Comp/Section1"
import Section2 from "../Components/StartUps_Comp/Section2"
import ValuesSection from "../Components/ValuesSection"
import JoinUsSection from "../Components/JoinUsSection"

function Startups (){
    return <div>
        <PublicHeroSection />
        <Section1 />
        <Section2 />
        <ValuesSection />
        <JoinUsSection />
        <Footer />
        <BottomPage />
    </div>
}
export default Startups