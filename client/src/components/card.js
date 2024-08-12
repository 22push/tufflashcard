import React from 'react';
import './card.css';

function Card(props) {
    const toggleFlip = props.toggleFlip;
    return (
        <div className={`flip-card ${props.isFlipped ? 'flipped' : ''}  min-w-64`} onClick={toggleFlip}>
            <div className="flip-card-inner">
                <div className="flip-card-front items-center ">
                    <div className={`fixed bg-[${props.color}] w-24 mt-[-300px]  font-bold font-mono text-2xl rounded-2xl md:mt-[-380px] ml-[200px]`}>{props.diff_level}</div>
                    <h1 className='heading'>Question {props.ques_no}</h1>
                    <p className='queshead'>
                        {props.question_description}
                    </p>
                </div>
                <div className="flip-card-back min-w-64">
                    <h1 className='answerheading'>Answer {props.ques_no}</h1>
                    <h1 className='answer'>{props.answer}</h1>
                    <p>{props.explanation}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;
