import { useEffect, useState } from 'react'
import './Contador.css'

export function Contador() {

    const [state, setState] = useState(0);

    useEffect(() => {
        state > 0 ? document.body.style.backgroundColor = "green" : state == 0 ? document.body.style.backgroundColor = "gray" : document.body.style.backgroundColor = "red";
        document.getElementById("Manual").value = state
    });

    function onNumberCapture(e) {
    
        if (Number(e.currentTarget.value)) {
            const value: number = Number(document.getElementById("Manual").value);
            return setState(value);
        }
        else{
            return false;
        }
    }


    return <>
        <div className='Container'>
            <div className='CounterTitle'>
                <h1>Contador fresco</h1>
            </div>

            <div className='CounterMenu'>
                <button className='ButtonsCounterMenu' onClick={() => setState(state - 1)}>-1</button>
                <p className='CounterStyle'>Current Value: {state}</p>
                <button className='ButtonsCounterMenu' onClick={() => setState(state + 1)}>+1</button>
            </div>

            <div className='CounterManual'>
                <input id='Manual' onKeyUp={onNumberCapture} ></input>
            </div>
        </div>
    </>
}