import CreatePost from "./Dashboard/CreatePost";
import Sidebar from "../Components/Dashboard/Sidebar";

function Dashboard (){
    return <div className="w-full h-screen bg-gray-200 flex">
        <Sidebar />
        <div className="flex flex-col items-center justify-center w-[80%] p-5">
            <CreatePost />
        </div>

    </div>
}
export default Dashboard;