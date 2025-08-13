function CreatePost (){
    return <div className="">
        <h1 className=" font-semibold text-[20px]"> Create Post </h1>
        <div className="w-[600px] px-[20px] pt-5 h-[450px] bg-white rounded-md">
            <div className="flex flex-col">
                <label> Title </label>
                <input className="border-[1.5px] px-2 w-full h-[37px] mt-1 rounded-md border-gray-400" type="text"  placeholder=""/>
            </div>
            <div className="flex justify-between   mt-3">
                <div className="flex flex-col ">
                    <label> Higlight </label>
                    <input className="border-[1.5px] px-2 w-[250px] h-[37px] mt-1 rounded-md border-gray-400" type="text"  placeholder=""/>
                </div>
                <div className="flex flex-col ">
                    <label> Date </label>
                    <input className="border-[1.5px] w-[250px] h-[37px] mt-1 rounded-md border-gray-400 px-2" type="date"  placeholder=""/>
                </div>
                
            </div>
            <div className="flex flex-col mt-3">
                <label> Image </label>
                <input className="border-[1.5px] px-2 w-full h-[37px] mt-1 rounded-md border-gray-400 p-[6px]" type="file"  placeholder=""/>
            </div>
            <div className="flex flex-col mt-3">
                <label> Description </label>
                <textarea className="border-[1.5px] px-2 w-full h-[100px] mt-1 rounded-md border-gray-400" type="text"  placeholder=""/>
            </div>
            <button className="bg-black text-white w-full h-[40px] mt-3 rounded-md"> Post </button>

        </div>

    </div>
}
export default CreatePost;