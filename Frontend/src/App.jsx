import { Routes,Route } from "react-router-dom"
import Home from "./Pages/Home"
import Ecosystem from "./Pages/Ecosystem"
import Sustain from "./Pages/Sustain"
function App (){
  return <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/sustain" element={<Sustain />} />
    <Route path="/ecosystem" element={<Ecosystem />} />
  </Routes>
}
export default App