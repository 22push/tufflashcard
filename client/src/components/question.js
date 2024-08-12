import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { ToLink } from '../App';
import SmallQuestion from './smallquestioncard'
function Allquestion() {
    const [Questions, setQuestions] = useState([]);
    // const [getresponse, setgetresponse] = useState(false);
    useEffect(() => {
        const getresponse = async () => {
            try {
                const response = await axios.get(`${ToLink}/questions`);

                // Response data is directly available from the response object
                // if (response) {
                //     setgetresponse(true);
                // }
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
            <div className='w-full p-8 grid  gap-4 justify-items-center lg:grid-cols-4 md:grid-cols-2'>

                {Questions.map(des => (
                    <SmallQuestion description={des.description} id = {des.id} />
                ))}

            </div>

        </>
    )
}

export default Allquestion