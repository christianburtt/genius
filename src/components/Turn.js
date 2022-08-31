import React, {useState} from 'react';
import './Turn.css';
import Response from './Response';
const Turn = (props) =>{
    const [turnVals,updateVals] = useState(['red','red','red','red']);
    // const [colors,setColor] = useState('');
    const updateColors = (loc,val)=>{
        // console.log("in turn: update colors: "+loc+" "+val);
        updateVals(prev => {
            prev[loc] = val;
            return prev;
        })
        // console.log("statein turn: "+turnVals);
        // console.log(props.answer);
    }
    
    const tryData = (event)=>{
        let numRight = 0;
        let numClose = 0;
        const rightIndices = [0,0,0,0];
        const closeIndices = [...rightIndices];
        // const answerArray = [...props.answer];
        event.preventDefault();
        for(let i=0; i<4; i++){
            if(turnVals[i]===props.answer[i]){ 
                numRight++;
                rightIndices[i]=1;
            }
        }
        console.log('Correct: '+numRight);
        console.log('right Indicies: '+rightIndices);
        //separate loop for finding close ones
        for(let i=0;i<4; i++){
            if(rightIndices[i]===0){
                for(let j=0;j<4;j++){
                    if(turnVals[i]===props.answer[j] 
                        && closeIndices[j]===0
                        && rightIndices[j]===0){
                        numClose++;
                        closeIndices[j]=1;
                        break;
                    }
                }
            }
        }
        console.log('Close: '+numClose);
        console.log('close indicies: '+closeIndices);
        props.onTurnSubmit({id:Math.random().toString(),response:[...turnVals], numRight: numRight, numClose:numClose});
        // console.log(answerArray);
        // updateVals(['red','red','red','red']);
    }
    return (
        <div className='turn'>
        <Response loc='0' val={turnVals[0]} onChangeColor={updateColors}/>
            <Response loc='1' val={turnVals[1]} onChangeColor={updateColors}/>
            <Response loc='2' val={turnVals[2]} onChangeColor={updateColors}/>
            <Response loc='3' val={turnVals[3]} onChangeColor={updateColors}/>
            
            <button className='btn-guess' onClick={tryData}>Try</button>
        </div>
    );
    
};
export default Turn;