import SinglePost from "../../Components/Dashboard/SinglePost";
import Sidebar from "../../Components//Dashboard/Sidebar";
import Solar from "../../Images/HomeComp-Images/Solar.jpg";
import Agri from "../../Images/HomeComp-Images/Agriculture.jpg";
import VR from "../../Images/HomeComp-Images/VR.jpg";
import Factory from "../../Images/HomeComp-Images/Factory.jpg";
import axios from 'axios'
import { useState, useEffect } from "react";
import { backendUrl } from "../../App";

function AllPosts() {
    const [getEvents,setGetEvents] = useState([])

  const getAllEvents = async () => {
    try {
      const response = await axios.get(backendUrl + "/allEvents");
      setGetEvents(response.data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  useEffect(() => {
    getAllEvents();
  }, []);


  return <div className="w-full min-h-screen bg-gray-200   flex ">
    <div className=" w-[18%] h-screen fixed left-0 top-0 ">
      <Sidebar />
    </div>
    <div className="ml-[18%] flex flex-col items-center overflow-y-auto min-h-screen pt-10 pb-10 w-[82%] p-5">
      <h1 className="font-semibold text-[25px] mb-5"> All Posts </h1>
      {getEvents.map(event => (
        <div key={event._id} className="bg-white p-4 rounded shadow-md w-[300px]">
          <h2 className="font-bold text-lg">{event.title}</h2>
          <img src={`${backendUrl}/images/${event.images}`} alt={event.title} className="w-full h-48 object-cover mt-2" />
          <p className="mt-2">{event.discription}</p>
          <p className="text-sm text-gray-500 mt-1">Date: {event.data}</p>
        </div>
      ))}
    </div>

  </div>
}
export default AllPosts;