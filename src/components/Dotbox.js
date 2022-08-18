import './Dotbox.css';
import React from 'react';
const Dotbox = (props)=>{
    const dotList = [];
    for(let i=0; i<props.numRight; i++){
        dotList.push('dot dot-black');
    }
    for(let j=0; j<props.numClose; j++){
        dotList.push('dot dot-white');
    }
    return(
        <div className='dotbox'>
            {dotList.map(dotColor => 
            <div key={Math.random()} className={dotColor}></div>)}
        </div>
    );
};
export default Dotbox;