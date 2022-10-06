import { useState } from 'react';

function CounterComponent() {

  const [timer, setTimer] = useState(0);
 
  const inputHandler = (e) => {
    console.log(e.target.value);

    // Can't change a state variable value like this
    //timer = e.target.value;

    setTimer(e.target.value);
  }

  return (
    <div className="CounterComponent">
      <input 
        type="number" 
        value={timer} 
        onInput={inputHandler}></input>

      <h1>Timer: {timer}</h1>
    </div>
  );
}

export default CounterComponent;
