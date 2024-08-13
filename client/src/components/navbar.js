import React from 'react'
import userimg from './../assets/user.png'
import { useNavigate } from 'react-router-dom'
function Navbar() {
    const nevigate  = useNavigate();
    function gotohome (){
        nevigate('/')
    }
    return (
        <>
            <div className='fixed bg-red-200 dark:bg-[#000000]  font-dmSans top-0 z-30 mx-0 mt-0 w-full border-b-2 border-zinc-200 dark:border-none'><nav className="bg-red-200 border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl  ml-10 flex flex-wrap items-center justify-between mx-auto p-4">
                    <svg width="125" height="26" viewBox="0 0 135 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 5.89409H15.3693L9.5331 36H21.8368L27.2126 5.89409H42.2511L43.4131 0H1.17165L0 5.89409Z" fill="#D41F30"></path><path d="M47.2951 0L42.512 26.9438L49.9857 36H82.8746L89.1533 0H77.1198L71.8129 30.008H56.8626L54.4711 27.0927L59.1053 0H47.2951Z" fill="#D41F30"></path><path d="M86.9282 36H98.7784L100.699 23.9651H130.691L131.882 17.9993H101.825L103.214 8.93625L106.724 5.82379H122.018L120.826 11.9812H132.81L134.929 0H102.156L91.6286 9.00241L86.9282 36Z" fill="#D41F30"></path></svg>
                    <div className="flex items-center mr-10 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                            <span className="sr-only">Open user menu</span>
                            <img className="w-14 h-14 rounded-full" src={userimg} alt="" onClick={gotohome}/>

                        </button>
                    </div>
                </div>
            </nav></div>

        </>
    )
}

export default Navbar