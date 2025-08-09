import { Routes,Route } from "react-router-dom"
import Home from "./Pages/Home"
import Ecosystem from "./Pages/Ecosystem"
import AboutUs from "./Pages/AboutUs"
import Community from "./Pages/Community"
import Startups from "./Pages/StartUps"
import AreasWeFocus from "./Pages/AreasWeFocus"
import Sustain from "./Pages/Sustain"
function App (){
  return <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/sustain" element={<Sustain />} />
    <Route path="/ecosystem" element={<Ecosystem />} />
    <Route path="/about" element={<AboutUs />} />
    <Route path="/community" element={<Community />} />
    <Route path="/startups" element={<Startups />} />
    <Route path="/areasWe" element={<AreasWeFocus />} />
  </Routes>
}
export default App