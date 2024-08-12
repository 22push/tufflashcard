import React from 'react'
import Navbar from '../components/navbar'
import { useNavigate } from 'react-router-dom'
function MainPage() {
    const navigate = useNavigate()
    const gotoquestions = () => {
        navigate('/questions')
    };
    const adminpage = () =>{
        navigate('/admin')
    }
    return (
        <>
            <Navbar />
            <div className='w-full h-full mt-40 flex justify-center flex-col items-center '>
                <div className='font-bold text-[50px] font-serif md:text-[100px]' >Your are...</div>
                <button type="button" className="m-1 w-1/4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" goto="/questions" onClick={gotoquestions}>Student</button>

                <button type="button" className="m-1 w-1/4 text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-red-700 dark:focus:ring-red-800" onClick={adminpage} >Admin</button>
            </div>
        </>
    )
}

export default MainPage