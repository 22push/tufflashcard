import React, { useEffect, useState } from 'react'
import Card from './card'
import axios from 'axios';
import Loader from './loader';
import { ToLink } from '../App';
// const Questions = [
//   {
//     question_id: "1",
//     question_description: "Which of the following sorting algorithms can be used to sort a random linked list with minimum time complexity?",
//     question_level: "Easy",
//     answer: "adsfd",
//     explanation: "asdf",
//   },
//   {
//     question_id: "2",
//     question_description: "In the worst case, the number of comparisons needed to search a singly linked list of length n for a given element is (GATE CS 2002)",
//     question_level: "Hard",
//     answer: "adsfd",
//     explanation: "asdf",
//   },
//   {
//     question_id: "3",
//     question_description: "Let P be a singly linked list. Let Q be the pointer to an intermediate node x in the list. What is the worst-case time complexity of the best known algorithm to delete the node Q from the list?",
//     question_level: "Medium",
//     answer: "adsfd",
//     explanation: "asdf", 
//   },
//   {
//     question_id: "4",
//     question_description: "What is the worst case time complexity of inserting n elements into an empty linked list, if the linked list needs to be maintained in sorted order",
//     question_level: "Easy",
//     answer: "adsfd",
//     explanation: "asdf",
//   },
//   {
//     question_id: "5",
//     question_description: "Which of the following sorting algorithms can be used to sort a random linked list with minimum time complexity?",
//     question_level: "Easy",
//     answer: "adsfd",
//     explanation: "asdf",
//   },
//   {
//     question_id: "6",
//     question_description: "In the worst case, the number of comparisons needed to search a singly linked list of length n for a given element is (GATE CS 2002)",
//     question_level: "Hard",
//     answer: "adsfd",
//     explanation: "asdf",
//   },
//   {
//     question_id: "7",
//     question_description: "Let P be a singly linked list. Let Q be the pointer to an intermediate node x in the list. What is the worst-case time complexity of the best known algorithm to delete the node Q from the list?",
//     question_level: "Medium",
//     answer: "adsfd",
//     explanation: "asdf", 
//   },
//   {
//     question_id: "8",
//     question_description: "What is the worst case time complexity of inserting n elements into an empty linked list, if the linked list needs to be maintained in sorted order",
//     question_level: "Easy",
//     answer: "adsfd",
//     explanation: "asdf",
//   }
// ]
const color = {
  Hard: "#EE4E4E",
  Medium: "yellow-300",
  Easy: "#399918"
};
function Flashcard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [comquiz, setcomquiz] = useState(false);
  const [Questions, setQuestions] = useState([]);
  const [getresponse, setgetresponse] = useState(false);
  useEffect(() => {
    const getresponse = async () => {
      try {
        const response = await axios.get(`${ToLink}/questions`);

        // Response data is directly available from the response object
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
  function completequiz() {
    setcomquiz(true);
  }
  function toggleFlip() {
    setIsFlipped(!isFlipped);
  }
  const nextQuestion = () => {
    setIsFlipped(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === Questions.length - 1 ? completequiz() : prevIndex + 1
    );
  };

  const prevQuestion = () => {
    setIsFlipped(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Questions.length - 1 : prevIndex - 1
    );
  };
  function playagain() {
    setCurrentIndex(0);
    setcomquiz(false);
  }
  return (
    <>
      <div className='w-full mt-24 h-full bg-black-400 flex justify-center'>
        <div className='w-full h-[500px] bg-red-300 flex justify-center rounded-3xl md:w-1/2' >
          {comquiz ? <>
            <div className='h-[450px] w-[400px] bg-slate-600 m-auto rounded-2xl flex flex-col justify-start'>
              <div className='w-full text-center font-bold text-slate-200'> <p className='font-sans m-20 text-[40px]'>Thank you for attempting</p></div>
                <div className='w-full  items-center justify-center'><button className="w-36 ml-32 text-white bg-green-700  m-1 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-500 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={playagain}>Play again</button></div></div></> : <><div className="mt-4 h-full">
                  <button
                    onClick={prevQuestion}
                    className={`mx-2 p-2 bg-gray-200 rounded-lg w-24 ${currentIndex === 0 ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                    disabled={currentIndex === 0}
                  >
                    Previous
                  </button>
                </div>
              {/* <Loader /> */}
              {!getresponse ? <Loader /> : <Card color={color[Questions[currentIndex].diff_level]} diff_level={Questions[currentIndex].diff_level} isFlipped={isFlipped} toggleFlip={toggleFlip} ques_no={currentIndex + 1} question_description={Questions[currentIndex].description} answer={Questions[currentIndex].answer} explanation={Questions[currentIndex].explanation} />}
              {/* <Card diff_level = {Questions[currentIndex].diff_level} isFlipped={isFlipped} toggleFlip={toggleFlip} ques_no={currentIndex + 1} question_description={Questions[currentIndex].description} answer={Questions[currentIndex].answer} explanation={Questions[currentIndex].explanation} /> */}

              <div className="mt-4 h-full">
                <button onClick={nextQuestion} className="mx-2 p-2 bg-gray-200 rounded-lg w-24">Next</button>
              </div></>}
        </div>
      </div>
    </>
  )
}

export default Flashcard