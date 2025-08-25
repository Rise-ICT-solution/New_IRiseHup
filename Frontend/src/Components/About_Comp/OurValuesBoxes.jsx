function OurValuesSmallBoxes (Props){
    return <div className="w-full">
        <img className="w-[250px] h-[200px] rounded-xl object-cover" src={Props.Image} alt="" />
        <h1 className="text-[45px] font-semibold"> {Props.Name} </h1>
        <p className="text-[18px] text-gray-600"> {Props.Desc} </p>
    </div>
}
export default OurValuesSmallBoxes