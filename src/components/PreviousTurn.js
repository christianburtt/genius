import React from 'react';
import './Response.css';
import './Turn.css';
import Dotbox from './Dotbox';
const PreviousTurn = (props) =>{

    return(
        <li className='prev-turn'>
            <div className='icon' style={{backgroundColor:props.colors[0]}}></div>
            <div className='icon' style={{backgroundColor:props.colors[1]}}></div>
            <div className='icon' style={{backgroundColor:props.colors[2]}}></div>
            <div className='icon' style={{backgroundColor:props.colors[3]}}></div>
            <Dotbox key={Math.random()} numRight={props.numRight} numClose={props.numClose} />
        </li>
    )
};
export default PreviousTurn;