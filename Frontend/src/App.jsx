import { Routes,Route } from "react-router-dom"
import Home from "./Pages/Home"
import Ecosystem from "./Pages/Ecosystem"
function App (){
  return <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/ecosystem" element={<Ecosystem />} />
  </Routes>
}
export default App