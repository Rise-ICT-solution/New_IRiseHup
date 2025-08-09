import Image1 from "../../Images/Community-Images/image.png"
function SectionOne (){
    return <div className="mt-25 px-[100px]">
        <h1 className="text-[35px] font-bold ml-35 w-[600px]"> Acquiring and investing in startups and businesses. </h1>
        <div className="w-[700px] rounded-xl ml-35 mt-10 overflow-hidden ">
            <img className=" w-full h-full object-cover transition-all duration-300 ease-in-out hover:scale-110" src={Image1} alt="" />
        </div>
        <h1 className="text-[35px] font-bold ml-35 w-[600px]"> At INNOVX, we acquire and invest in startups and businesses through our specialized investment vehicles, providing the support and resources they need to thrive. </h1>
        <p> We invest directly in businesses across our three priority sectors, taking equity stakes so that we can maximise our impact and help businesses scale and grow. We also do greenfield investment, creating and developing new operations from the ground up.
        We invest via our specialist funds such as BIDRA, UM6P and Seedbox and our objective is to develop high-performing businesses in agriculture, energy and chemicals that power sustainable growth and enable technology advancement. </p>
    </div>
}
export default SectionOne