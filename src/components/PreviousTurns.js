import React, {useState} from 'react';
import PreviousTurn from './PreviousTurn';
import './Turn.css';
const PreviousTurns = (props) =>{
    return(
        <ul className='turns-list'>
            { props.turns.map(turn => <PreviousTurn 
            key={turn.id}
            colors={turn.response}
            numRight={turn.numRight}
            numClose={turn.numClose}
            />)}
        </ul>
    );
};
export default PreviousTurns;