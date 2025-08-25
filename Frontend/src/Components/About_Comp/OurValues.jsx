import OurValuesSmallBoxes from "./OurValuesBoxes"

function Ourvalues (){
      const items = [
    { Name: "Niya", Desc: "Soul and spirit", Image: "https://images.prismic.io/innovx/aEK3c7h8WN-LVuem_v1.jpg?auto=format,compress&rect=32,0,736,533&w=1000&h=724" },
    { Name: "Nefs", Desc: "Courage and commitment", Image: "https://images.prismic.io/innovx/aEK3dLh8WN-LVuen_v2.jpg?auto=format,compress&rect=32,0,736,533&w=1000&h=724" },
    { Name: "Passion", Desc: "Soul and spirit", Image: "https://images.prismic.io/innovx/aEK3dbh8WN-LVueo_v3.jpg?auto=format,compress&rect=32,0,736,533&w=1000&h=724" },
    { Name: "Nefs", Desc: "Courage and commitment", Image: "https://images.prismic.io/innovx/aEK3dLh8WN-LVuen_v2.jpg?auto=format,compress&rect=32,0,736,533&w=1000&h=724" },
  ];

  // Duplicate items for seamless scroll
  const duplicated = [...items, ...items];
    return <div className="overflow-hidden">
            <div className="w-full flex justify-center mt-30  relative">
                <div className="w-[300px] h-[300px]  skew-[-20deg] rotate-12 bg-gray-400/20 "></div>
                <div className="w-[700px] mt-7 -ml-10  ">
                    <h1 className="font-bold text-[30px] text-gray-400"> Our Values  </h1>
                    <p className="font-semibold text-[30px] mt-5 leading-[40px]"> At INNOVX, our values define who we are and how we operate. These principles shape our culture, fuel our ambition, and unite our people across every initiative.</p>
                    <p className="text-[18px] mt-3"> We foster a culture of collaboration, innovation, and excellence—where every team member is empowered to drive impact.</p>
                </div>
            </div>
            <div className="w-full flex animate-scroll gap-3 mt-20">
                {duplicated.map((item, i) => (
                    <div className="flex-shrink-0 w-1/4" key={i}>
                        <OurValuesSmallBoxes Name={item.Name} Desc={item.Desc} Image={item.Image} />
                    </div>
                ))}
            </div>
        </div>
}
export default Ourvalues