import IntroAboutImage from "../../Images/About-Images/IntroAbout.jpg"
function Introduction (){
    return <div className="">
        <div className="w-full h-[700px] relative rounded-b-[50px] overflow-hidden">
            <img className="w-full h-full object-cover" src={IntroAboutImage} alt="" />
            <div className="w-full h-full absolute top-0 bg-white/95 px-[30px] ">
                <h1 className="text-[30px] w-[600px] font-semibold mt-40 "> INNOVX is dedicated to creating a diversified portfolio of businesses, supported by ecosystems and innovation to catalyse sustainable growth and technological advancement in Morocco, Africa and beyond.</h1>
                <p className="w-[700px] absolute right-10 bottom-10 text-[18px]"> As a subsidiary of the UM6P ecosystem, we are developing and scaling solutions to address global challenges across agriculture, energy, and chemicals. We operate at the intersection of innovation, sustainability, and industrial scale.</p>
            </div>
        </div>
    </div>
}
export default Introduction