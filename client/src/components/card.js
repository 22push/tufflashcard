import React from 'react';
import './card.css';

function Card(props) {
    const toggleFlip = props.toggleFlip;
    const diff_level = props.diff_level;

    const color = {
        Hard: "red-300",
        Medium: "yellow-300",
        Easy: 'green-300'
    };

    console.log(diff_level);

    const curr_color = color[diff_level];

    console.log(curr_color);
    return (
        <div className={`flip-card ${props.isFlipped ? 'flipped' : ''}`} onClick={toggleFlip}>
            <div className="flip-card-inner">
                <div className="flip-card-front items-center ">
                    <div className={`fixed bg-${curr_color} w-24 mt-[-380px] ml-[250px] rounded-2xl`}>{props.diff_level}</div>
                    <h1 className='heading'>Question {props.ques_no}</h1>
                    <p className='queshead'>
                        {props.question_description}
                    </p>
                </div>
                <div className="flip-card-back">
                    <h1 className='answerheading'>Answer {props.ques_no}</h1>
                    <h1 className='answer'>{props.answer}</h1>
                    <p>{props.explanation}</p>
                    {/* <p>Architect & Engineer</p>
                    <p>We love that guy</p> */}
                </div>
            </div>
        </div>
    );
}

export default Card;
