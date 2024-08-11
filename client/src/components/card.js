import React from 'react';
import './card.css';

function Card(props) {
    const toggleFlip = props.toggleFlip;

    return (
        <div className={`flip-card ${props.isFlipped ? 'flipped' : ''}`} onClick={toggleFlip}>
            <div className="flip-card-inner">
                <div className="flip-card-front">
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
