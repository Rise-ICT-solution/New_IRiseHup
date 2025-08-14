import { useState } from 'react';
import axios from 'axios'
import {toast} from 'react-toastify'
import {ToastContainer} from 'react-toastify'

import { backendUrl } from '../../App';
import Sidebar from '../../Components/Dashboard/Sidebar';

function CreatePost (){


    const [title, setTitle] = useState('')
    const [discription, setDiscription] = useState('')
    const [data, setData] = useState('')
    const [highlight, setHighlight] = useState('')
    const [images, setImages] = useState([])


    const handleSabmit = async (e)=>{
        e.preventDefault()

        try {
            const formData = new FormData()

            formData.append('title', title)
            formData.append('discription', discription)
            formData.append('data', data)
            formData.append('images', images)
            formData.append('Highlight', highlight)

            const response = await axios.post(backendUrl + "/add/event",formData)
            if (response.data) {
                toast.success("Post created successfully!")
                setTitle('')
                setDiscription('')
                setData('')
                setImages(null)
                setHighlight('')

            }else{
                toast.error(response.data.message || "Something went wrong")
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message)
            
        }
    }



    return <div className=" w-full min-h-screen bg-gray-200   flex ">
        <div className=" w-[18%] h-screen fixed left-0 top-0 ">
      <Sidebar />
    </div>
    <div className='ml-[18%] flex flex-col items-center   pt-10 pb-10 w-[82%] p-5'>

   
        <h1 className=" font-semibold text-[20px]"> Create Post </h1>
        <form onSubmit={handleSabmit}>
            
        <div className="w-[600px] px-[20px] pt-5 h-[450px] bg-white rounded-md">
            <div className="flex flex-col">
                <label> Title </label>
                <input value={title} onChange={(e)=>setTitle(e.target.value)} className="border-[1.5px] px-2 w-full h-[37px] mt-1 rounded-md border-gray-400" type="text"  placeholder=""/>
            </div>
            <div className="flex justify-between   mt-3">
                <div className="flex flex-col ">
                    <label> Higlight </label>
                    <input value={highlight} onChange={(e) => setHighlight(e.target.value)}  className="border-[1.5px] px-2 w-[250px] h-[37px] mt-1 rounded-md border-gray-400" type="text"  placeholder=""/>
                </div>
                <div className="flex flex-col ">
                    <label> Date </label>
                    <input  value={data} onChange={(e)=>setData(e.target.value)} className="border-[1.5px] w-[250px] h-[37px] mt-1 rounded-md border-gray-400 px-2" type="date"  placeholder=""/>
                </div>
                
            </div>
            <div className="flex flex-col mt-3">
                <label> Image </label>
                <input  onChange={(e)=>setImages(e.target.files[0])} className="border-[1.5px] px-2 w-full h-[37px] mt-1 rounded-md border-gray-400 p-[6px]" type="file"  placeholder=""/>
            </div>
            <div className="flex flex-col mt-3">
                <label> Description </label>
                <textarea value={discription} onChange={(e)=>setDiscription(e.target.value)} className="border-[1.5px] px-2 w-full h-[100px] mt-1 rounded-md border-gray-400" type="text"  placeholder=""/>
            </div>
            <button className="bg-black text-white w-full h-[40px] mt-3 rounded-md"> Post </button>

        </div>

        </form>
     <ToastContainer />


    </div>
    </div>
}
export default CreatePost;