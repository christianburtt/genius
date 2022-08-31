import React, {useState} from 'react';
import './Response.css';
const Response = (props)=>{
    const [responseColor, setResponseColor] = useState('red');

    const colorChangeHandler = (event)=>{
        // console.log('change to: '+event.target.value)
        setResponseColor(event.target.value);
        props.onChangeColor(props.loc, event.target.value);
    }
    return(
        <div>
            <div className='icon' style={{backgroundColor:responseColor}}></div>
            <select className='select' onChange={colorChangeHandler} value={responseColor}>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="yellow">Yellow</option>
                <option value="purple">Purple</option>
                <option value="#ff8b3c">Orange</option>

            </select>
        </div>
    )
};
export default Response;