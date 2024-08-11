import React, { useState } from 'react'
import Card from './card'
const Questions = [
  {
    question_id: "1",
    question_description: "Which of the following sorting algorithms can be used to sort a random linked list with minimum time complexity?",
    question_level: "Easy",
    answer: "adsfd",
    explanation: "asdf",
  },
  {
    question_id: "2",
    question_description: "In the worst case, the number of comparisons needed to search a singly linked list of length n for a given element is (GATE CS 2002)",
    question_level: "Easy",
    answer: "adsfd",
    explanation: "asdf",
  },
  {
    question_id: "3",
    question_description: "Let P be a singly linked list. Let Q be the pointer to an intermediate node x in the list. What is the worst-case time complexity of the best known algorithm to delete the node Q from the list?",
    question_level: "Easy",
    answer: "adsfd",
    explanation: "asdf",
  },
  {
    question_id: "4",
    question_description: "What is the worst case time complexity of inserting n elements into an empty linked list, if the linked list needs to be maintained in sorted order",
    question_level: "Easy",
    answer: "adsfd",
    explanation: "asdf",
  }
]
function Flashcard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [comquiz, setcomquiz] = useState(false);
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
        <div className='w-1/2 h-[500px] bg-red-300 flex justify-center rounded-3xl' >
          {comquiz ? <><div className='h-[450px] w-[400px] bg-slate-600 m-auto rounded-2xl flex justify-center'><p className='font-sans text-3xl'>Thank you <br></br> for attempting</p>
            <button onClick={playagain}>Play again</button></div></> : <><div className="mt-4 h-full">
              <button
                onClick={prevQuestion}
                className={`mx-2 p-2 bg-gray-200 rounded-lg w-24 ${currentIndex === 0 ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                disabled={currentIndex === 0}
              >
                Previous
              </button>
            </div>
            <Card isFlipped={isFlipped} toggleFlip={toggleFlip} ques_no={currentIndex + 1} question_description={Questions[currentIndex].question_description} answer={Questions[currentIndex].answer} explanation={Questions[currentIndex].explanation} />

            <div className="mt-4 h-full ">
              <button onClick={nextQuestion} className="mx-2 p-2 bg-gray-200 rounded-lg w-24">Next</button>
            </div></>}
        </div>
      </div>
    </>
  )
}

export default Flashcard