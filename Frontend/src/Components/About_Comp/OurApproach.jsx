import { HiArrowSmRight } from "react-icons/hi";
import Engineers from "../../Images/About-Images/Engineers.jpg"
import Engineers2 from "../../Images/About-Images/Engineers2.jpg"
import Engineers3 from "../../Images/About-Images/Engineers3.jpg"

function OurApproach (){
    return <div className="w-full mt-30 ">
        {/* Our Approach section */}
        <div className="ml-30">
            <h3 className="text-[22px] font-semibold text-gray-500"> Our Approach </h3>
            <h1 className="text-[35px] w-[750px] font-semibold leading-[50px] mt-6"> Our unique model relies on three strategic pillars:</h1>
        </div>
        <div className="w-[700px] relative h-[450px] rounded-xl mt-20  overflow-hidden">
                <img className="w-full h-full  object-cover" src={Engineers} alt="" />
                <div className="w-full h-full absolute top-0 flex flex-col items-center justify-center bg-black/30 px-10">
                    <button className="primaryBtn bg-white group  "> Play Video 
                        <div className="primaryBtnArrayIcon bg-black border-black group-hover:text-black text-white group-hover:bg-transparent"> <HiArrowSmRight /> </div> 
                    </button>
                </div>
        </div>
        {/* Build thriving  */}
        <div>
            <div className="ml-40 mt-25">
                <div className="flex w-[380px] relative">
                    <h3 className="text-[30px] font-semibold absolute z-1 "> Build thriving businesses </h3>
                    <div className="w-[42px] h-[42px] absolute right-0 bg-transparent border-[1.5px] border-gray-400 skew-[-20deg]"></div>
                </div>
                <p className="text-[20px] w-[750px] mt-20"> We create and scale businesses from ideation to industrialization. By embedding best-in-class governance and leveraging robust financing, we deliver high-performance ventures with real impact </p>
                <button className="primaryBtn bg-black group py-3 text-white mt-5 "> SEE HOW WE INVEST FOT IMPACT 
                    <div className="primaryBtnArrayIcon bg-white w-[35px] h-[35px] border-white group-hover:text-white text-black group-hover:bg-transparent"> <HiArrowSmRight /> </div> 
                </button>
            </div>
            <div className="w-[700px] relative h-[450px] rounded-xl mt-20  overflow-hidden">
                    <img className="w-full h-full  object-cover" src={Engineers2} alt="" />
                    <div className="w-full h-full absolute top-0 flex flex-col items-center justify-center bg-black/30 px-10">
                    </div>
            </div>
        </div>
        {/* Invest  section */}
        <div>
            <div className="ml-40 mt-25">
                <div className="flex w-[300px] relative">
                    <h3 className="text-[30px] font-semibold absolute z-1 "> Invest in Innovation </h3>
                    <div className="w-[42px] h-[42px] absolute right-1 bg-transparent border-[1.5px] border-gray-400 skew-[-20deg]"></div>
                </div>
                <p className="text-[20px] w-[750px] mt-20"> Make strategic acquisitions and equity investments in groundbreaking businesses. We acquire and invest in startups and businesses through our specialized investment vehicles, providing the support and resources they need to thrive. </p>
                <button className="primaryBtn bg-black group py-3 text-white mt-5 "> SEE HOW WE INVEST FOT IMPACT 
                    <div className="primaryBtnArrayIcon bg-white w-[35px] h-[35px] border-white group-hover:text-white text-black group-hover:bg-transparent"> <HiArrowSmRight /> </div> 
                </button>
            </div>
            <div className="w-[700px] relative h-[450px] rounded-xl mt-20  overflow-hidden">
                    <img className="w-full h-full  object-cover" src={Engineers2} alt="" />
                    <div className="w-full h-full absolute top-0 flex flex-col items-center justify-center bg-black/30 px-10">
                    </div>
            </div>
        </div>
        {/* Develop Ecocystem */}
        <div>
             <div className="ml-40 mt-25  w-[750px]">
                <div className="flex w-[300px] relative">
                    <h3 className="text-[30px] font-semibold absolute z-1 "> Develop ecosystems </h3>
                    <div className="w-[42px] h-[42px] absolute -right-2 bg-transparent border-[1.5px] border-gray-400 skew-[-20deg]"></div>
                </div>
                <p className="text-[20px] mt-20"> We strengthen industrial ecosystems and value chains across our three strategic sectors, catalysing business growth and innovation. We leverage our business-building and sponsor ecosystem, including academia and R&D partnerships to attract local and international investors and accelerate development of industrial ecosystems. Our approach is supported by a suite of specialized businesses designed to power every stage of ecosystem development: </p>
                <ul className="mt-4">
                    <li className="flex gap-2 items-center text-[18px] mt-2"> <div className="w-[8px] h-[8px] bg-black rounded-full"></div> <span className="font-semibold">LaunchX:</span> Our venture builder that transforms bold ideas into scalable impact businesses.</li>
                    <li className="flex gap-2 items-center text-[18px] mt-2"> <div className="w-[8px] h-[8px] bg-black rounded-full"></div> <span className="font-semibold">ParkX:</span> Our smart industrial park platform enabling sustainable industrial infrastructure.</li>
                    <li className="flex gap-2 items-center text-[18px] mt-2"> <div className="w-[8px] h-[8px] bg-black rounded-full"></div> <span className="font-semibold">ItX:</span> Our innovation integrator bridging research, technology, and industry.</li>
                    <li className="flex gap-2 items-center text-[18px] mt-2"> <div className="w-[8px] h-[8px] bg-black rounded-full"></div> <span className="font-semibold">SetPoint:</span> Our data and digital infrastructure engine driving operational excellence.</li>
                    <li className="flex gap-2 items-center text-[18px] mt-2"> <div className="w-[8px] h-[8px] bg-black rounded-full"></div> <span className="font-semibold">MAVA:</span> Our agri-finance platform that catalyse sustainable agri-value chains in Africa.</li>
                </ul>
                <p className="text-[20px] mt-10"> Each of these ecosystem enablers brings targeted capabilities and infrastructure, supporting ventures across every stage of development—from early R&D to industrial deployment. This ensures each project benefits from cutting-edge expertise, robust support, and measurable impact. </p>
                <button className="primaryBtn bg-black group py-3 text-white mt-5 "> DISCOVER OUR ECOSYSTEM ENABLERS
                    <div className="primaryBtnArrayIcon bg-white w-[35px] h-[35px] border-white group-hover:text-white text-black group-hover:bg-transparent"> <HiArrowSmRight /> </div> 
                </button>
            </div>
        </div>
    </div> 
}
export default OurApproach