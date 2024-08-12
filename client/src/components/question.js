import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SmallQuestion from './smallquestioncard'
function Allquestion() {
    const [Questions, setQuestions] = useState([]);
    // const [getresponse, setgetresponse] = useState(false);
    useEffect(() => {
        const getresponse = async () => {
            try {
                const response = await axios.get('http://localhost:8080/questions');

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
            <div className='w-full grid grid-cols-4 gap-4 justify-items-center p-8'>
                {Questions.map(des => (
                    <SmallQuestion description={des.description} />
                ))}

            </div>

        </>
    )
}

export default Allquestion