import React from 'react';
import './Response.css';
import './Turn.css';
const PreviousTurn = (props) =>{

    return(
        <li className='prev-turn'>
            <div className='icon' style={{backgroundColor:props.colors[0]}}></div>
            <div className='icon' style={{backgroundColor:props.colors[1]}}></div>
            <div className='icon' style={{backgroundColor:props.colors[2]}}></div>
            <div className='icon' style={{backgroundColor:props.colors[3]}}></div>
            <div>
                <h4 className='green'>Correct: {props.numRight}</h4>
                <h4 className='yellow'>Almost: {props.numClose}</h4>
            </div>
        </li>
    )
};
export default PreviousTurn;