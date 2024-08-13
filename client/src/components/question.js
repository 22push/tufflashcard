import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { ToLink } from '../App';
import SmallQuestion from './smallquestioncard'
import Loader from './loader';
function Allquestion() {
    const [Questions, setQuestions] = useState([]);
    const [getresponse, setgetresponse] = useState(false);

    useEffect(() => {
        const getresponse = async () => {
            try {
                const response = await axios.get(`${ToLink}/questions`);
                if (response) {
                    setgetresponse(true);
                }
                console.log(response.data);
                setQuestions(response.data);
            } catch (err) {
                console.error('Failed to fetch data:', err);
            }
        };

        getresponse();
    }, []);
    return (
        <>  
            {/* <Loader/> */}
           {!getresponse?<Loader/> :  <div className='w-full p-8 grid  gap-4 justify-items-center lg:grid-cols-4 md:grid-cols-2'>
               {Questions.map(des => (
                    <SmallQuestion description={des.description} id = {des.id} diffculty = {des.diff_level} answer={des.answer} explanation ={des.explanation} />
                ))}

            </div>}

        </>
    )
}

export default Allquestion