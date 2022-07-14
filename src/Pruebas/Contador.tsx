import { useEffect, useState } from 'react'
import './Contador.css'

export function Contador() {

    const [state, setState] = useState(0);

    useEffect(() => {
        state > 0 ? document.body.style.backgroundColor = "green" : state == 0 ? document.body.style.backgroundColor = "gray" : document.body.style.backgroundColor = "red";
    });

    function gg() {
        const value: number = Number(document.getElementById("Manual").value);
        return setState(value);
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
                <input id='Manual' ></input>
                <button onClick={gg}>Set</button>
            </div>
        </div>
    </>
}