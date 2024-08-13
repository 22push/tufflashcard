import React from 'react'
import { useNavigate } from 'react-router-dom'
import store from './../store/store'
import * as questionaction from './../store/actions/quesstateaction'
function SmallQuestion(props) {
    const nevigate = useNavigate();
    function editques(id){
        const data =  {
            id: props.id,
            description:props.description,
            diff_level:props.diffculty,
            answer:props.answer,
            explanation:props.explanation
        }
        nevigate(`/admin/${id}`)
        store.dispatch(questionaction.setQuestionUp(data))
    }
    return (
        <>
            <div className="relative w-64 h-48 p-6 bg-gray-400 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
                <li className='list-none h-24 overflow-hidden'>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-wrap ">{props.description}</h5>
                </li>
                <li className="absolute w-1/2 m-4 inset-x-0 bottom-0 list-none inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 cursor-pointer" onClick={()=>editques(props.id)}>
                    see question
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </li>
            </div>
        </>
    )
}

export default SmallQuestion

