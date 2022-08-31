import React, {useState} from 'react';
import './Game.css';
import Turn from './Turn';
import PreviousTurns from './PreviousTurns';
/**
 * 
 * COLORS:
 * red, blue, green, yellow, purple, #ff8b3c
 */
 const COLORS = ['red','green','blue','yellow','purple','#ff8b3c'];

const Game = () => {
    const [gameStatus, setStatus] = useState('playing');
    const [previousTurns, setPreviousTurns] = useState([]);
    // const answer = ['red','blue','green','#ff8b3c'];
    const [answer, setAnswer] = useState( () =>{
        const initialAnswer = [];
        for(let i=0; i<4; i++){
            initialAnswer.push(COLORS[Math.floor(Math.random() * 6)]);
        }
        return initialAnswer;
    });

    

    const recordTry = (turn) =>{
        console.log(turn);
        if(turn.numRight ===4){
            setStatus('won');
        }
        setPreviousTurns(previous => {
            return [ turn,...previous];
        });
    }
    if(gameStatus=="won"){
        return(<div className='game-container'>
            <div className='game-board'>
                <h2>YOU WIN!</h2>
                <hr></hr>
                <PreviousTurns turns={previousTurns} />

            </div>
        </div>)
    }
    return(
        <div className='game-container'>
            <div className='game-board'>
                <PreviousTurns turns={previousTurns} />
                <hr></hr>
                <Turn answer={answer} onTurnSubmit={recordTry}/>
            </div>
        </div>
    )
};
export default Game;