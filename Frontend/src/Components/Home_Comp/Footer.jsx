import IRiseHupLogo from "../../Images/HomeComp-Images/iRisehubLogo.png"
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
function Footer (){
    return <div className="w-full flex flex-col ">
            <div className="w-full h-[450px] flex  border-b-[1.5px] pb-[30px] border-b-gray-600 mt-20 px-[100px] ">
                {/* Left */}
                <div className="relative w-full h-full">
                    <div className="w-[220px] h-[190px]  bg-[#F3F4F4] skew-x-[-40deg]"></div>
                    <div className="w-[300px] absolute top-6 -ml-5">
                        <img className="w-[200px]" src={IRiseHupLogo} alt="" />
                        <p className="text-[14px] mt-5 ml-10"> Bulahubey, Mogadishu, Somalia. <br />BBS Mall, Floor 1, Nairobi, Kenya. </p>
                    </div>
                    <div className="flex gap-5 items-center absolute bottom-0">
                        <div className="w-[30px] h-[30px]  text-black hover:text-white flex items-center justify-center transition-all duration-300 ease-in-out hover:scale-125 overflow-hidden bg-[#F3F4F4] hover:bg-black rounded-full group"> 
                            <FaLinkedinIn  className="text-[17px] transition-transform duration-300 ease-in-out "/> 
                        </div>
                        <div className="w-[30px] h-[30px]  text-black hover:text-white flex items-center justify-center transition-all duration-300 ease-in-out hover:scale-125 overflow-hidden bg-[#F3F4F4] hover:bg-black rounded-full group"> 
                            <FaXTwitter  className="text-[17px] transition-transform duration-300 ease-in-out "/> 
                        </div>
                        <div className="w-[30px] h-[30px]  text-black hover:text-white flex items-center justify-center transition-all duration-300 ease-in-out hover:scale-125 overflow-hidden bg-[#F3F4F4] hover:bg-black rounded-full group"> 
                            <IoLogoInstagram  className="text-[17px] transition-transform duration-300 ease-in-out "/> 
                        </div>
                        <div className="w-[30px] h-[30px]  text-black hover:text-white flex items-center justify-center transition-all duration-300 ease-in-out hover:scale-125 overflow-hidden bg-[#F3F4F4] hover:bg-black rounded-full group"> 
                            <FaFacebookF  className="text-[17px] transition-transform duration-300 ease-in-out "/> 
                        </div>
                    </div>
                </div>
                {/* Right */}
                <div className="w-full relative">
                    <h3 className="text-[20px] font-semibold "> Pioneering next industries. </h3>
                    <h1 className="mt-10 text-gray-600"> At INNOVX, we build and scale next-generation businesses and industrial ecosystems to catalyse sustainable growth and innovation across Morocco, Africa, and beyond.</h1>
                    <div className="flex justify-between text-gray-800 gap-0 absolute w-full bottom-0">
                        <ul className="leading-[35px]">
                            <li className="hover:border-b-[1.5px] hover:border-b-black"> About </li>
                            <li className="hover:border-b-[1.5px] hover:border-b-black"> Ecosystem </li>
                            <li className="hover:border-b-[1.5px] hover:border-b-black"> Areas We Focus </li>
                            <li className="hover:border-b-[1.5px] hover:border-b-black"> Community </li>
                            <li className="hover:border-b-[1.5px] hover:border-b-black"> Startups</li>
                        </ul>
                        <ul className="leading-[35px]">
                            <li className="hover:border-b-[1.5px] hover:border-b-black"> Rise Academy </li>
                            <li className="hover:border-b-[1.5px] hover:border-b-black"> Minbar </li>
                            <li className="hover:border-b-[1.5px] hover:border-b-black"> IRiseHup </li>
                            <li className="hover:border-b-[1.5px] hover:border-b-black"> Kobciye </li>
                        </ul>
                        <ul className="leading-[35px]">
                            <li className="hover:border-b-[1.5px] hover:border-b-black"> Event And News </li>
                            <li className="hover:border-b-[1.5px] hover:border-b-black"> Terms & Condition </li>
                            <li className="hover:border-b-[1.5px] hover:border-b-black"> Privacy Policy </li>
                        </ul>
                    </div>
                </div>

            </div>
                <p className="text-center text-gray-800 text-[14px] mt-8"> 2025. INNOVX. All Rights Reserved. </p>
    </div>
}
export default Footer 