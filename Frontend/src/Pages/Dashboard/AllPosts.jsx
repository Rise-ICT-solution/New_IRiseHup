import SinglePost from "../../Components/Dashboard/SinglePost";
import Sidebar from "../../Components//Dashboard/Sidebar";

function AllPosts (){
    return <div className="w-full h-screen bg-gray-200 flex">
        <Sidebar />
        <div className="flex flex-col items-center justify-center w-[80%] p-5">
            <SinglePost />
        </div>

    </div>
}
export default AllPosts;