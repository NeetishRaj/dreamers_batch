import React, { useEffect, useState } from 'react';

function CounterFunction(props) {

    const [timer, setTimer]  = useState(0);

    const incrementTimer = () => {
        setTimer(timer + 1);
    }

    useEffect(() => {
        console.log('ComponentDidMount');

        return () => {
            console.log('ComponentDidUnmount');
        }
    })

    return (
        <div className="counter-container">
            {timer} Seconds

            <div>
                <button onClick={incrementTimer}>+</button>
                
                <button onClick={() => {setTimer(timer - 1);}}>-</button>
            </div>
        </div>
    )
}

export default CounterFunction;