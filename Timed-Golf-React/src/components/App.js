import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";
import Ball from './Ball';

function App() {
  const [timer, setTimer] = useState(0);
  const [x, setX] = useState(0);
  const [y , setY] = useState(0);

  return (<div >
    <div className="button_container">
        <button>Start</button>
    </div>

    <h2 className="heading-timer">{timer}</h2>

    <Ball xPos={x} yPos={y} setX={setX} setY={setY}/>
    
    <div className="hole"></div>
  </div>)
}

export default App;
