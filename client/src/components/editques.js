import React, { useRef, useState } from 'react';
import Card from './card'
import { ToLink } from '../App';
import axios from 'axios';
function Editquestion() {
    const inputsRef = useRef({
        description: null,
        difficulty: null,
        answer: null,
        explanation: null,
    });
    const [formdata, setFormdata] = useState({});
    const [preview, setPreview] = useState(false);
    const [isFlipped, setIsFlipped] = useState(false);
    const [addquestionstate, setaddquestionstate] = useState(true);
    function toggleFlip() {
        setIsFlipped(!isFlipped);
    }
    const onpreview = () => {
        inputvalues();
        setPreview(true);
    };
    const offpreview = () => {
        setPreview(false);
    };
    function inputvalues() {
        const data = {
            description: inputsRef.current.description.value,
            diff_level: inputsRef.current.difficulty.value,
            answer: inputsRef.current.answer.value,
            explanation: inputsRef.current.explanation.value,
        };

        setFormdata(data);
        console.log(data);
    };
    function addquestion() {
        setaddquestionstate(!addquestionstate);
    }
    function discardquestion() {
        setFormdata([]);
        setaddquestionstate(true);
    }
    async function handleSubmit(e) {
        e.preventDefault();
        //  await inputvalues();
        const data = {
            description: inputsRef.current.description.value,
            diff_level: inputsRef.current.difficulty.value,
            answer: inputsRef.current.answer.value,
            explanation: inputsRef.current.explanation.value,
        };
        setFormdata(data);
        console.log("Form submitted with data: ", data);
        const senddata = async () => {
            try {
                const reponse = await axios.post(`${ToLink}/questions`, data);
                console.log(reponse);
                setFormdata({});
            }
            catch (err) {
                console.log(err);
            }
        }
        senddata();
        setaddquestionstate(!addquestionstate);
    }

    return (
        <>
            {
                addquestionstate ? <div className='w-full mt-24 h-full bg-black-400 flex justify-center'><button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={addquestion}>Add question</button></div> : <div className='w-full mt-24 h-full bg-black-400 flex justify-center'>
                    
                    <div className='w-full bg-red-300 flex flex-col justify-center rounded-3xl m-4 md:w-1/2'>
                    <h1 className='items-center mt-6 text-[50px] text-center font-bold'>Add Question</h1>
                        {preview ? (
                            <div className="p-8 rounded-lg">
                                <Card diff_level={formdata.difficulty} isFlipped={isFlipped} toggleFlip={toggleFlip} question_description={formdata.description} answer={formdata.answer} explanation={formdata.explanation} />
                                <div className='w-full flex justify-center items-center'>
                                <button className="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={offpreview}>Edit</button>
                                </div>
                            </div>

                        ) : (
                            <form className="w-3/4 mx-auto bg-slate-500 p-16 m-12 rounded-3xl">
                                <div className="mb-5">
                                    <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Question Description</label>
                                    <input
                                        type="text"
                                        id="description"
                                        defaultValue={formdata.description}
                                        ref={el => inputsRef.current.description = el}
                                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                        placeholder="Description"
                                        required
                                    />
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="difficulty" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Difficulty Level</label>
                                    <select
                                        defaultValue={formdata.diff_level}
                                        name="difficulty"
                                        id="difficulty"
                                        ref={el => inputsRef.current.difficulty = el}
                                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                        required
                                    >
                                        <option value="Easy">Easy</option>
                                        <option value="Medium">Medium</option>
                                        <option value="Hard">Hard</option>
                                    </select>
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="answer" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Answer</label>
                                    <input
                                        type="text"
                                        id="answer"
                                        ref={el => inputsRef.current.answer = el}
                                        defaultValue={formdata.answer}
                                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                        placeholder="Answer"
                                        required
                                    />
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="explanation" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Explanation</label>
                                    <input
                                        type="text"
                                        id="explanation"
                                        defaultValue={formdata.explanation}
                                        ref={el => inputsRef.current.explanation = el}
                                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                        placeholder="Explanation"
                                    />
                                </div>

                                <div className=' w-full flex flex-col justify-around md:flex-row'>
                                    <button type="submit" className=" text-white bg-green-700  m-1 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={handleSubmit} >Update</button>

                                    <button type="button" className="m-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={onpreview}>Delete</button>

                                    <button type="button" className="m-1 text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-red-700 dark:focus:ring-red-800" onClick={discardquestion}>Discard</button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>}
        </>
    );
}

export default Editquestion;
