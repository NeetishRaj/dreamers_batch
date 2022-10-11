import { useEffect } from "react";
import React from "react";

function Ball({xPos, yPos, setX, setY}) {

  const STEP_COUNT = 5;

  const handle_keydown = (event) => {
    //console.log(event.keyCode);

    switch (event.keyCode) {
      case 37:
        console.log("LEFT");
        setX(xPos - STEP_COUNT);
        break;

      case 38:
        console.log("UP");
        setY(yPos - STEP_COUNT);
        break;

      case 39:
        console.log("RIGHT");
        setX(xPos + STEP_COUNT);
        break;

      case 40:
        console.log("DOWN");
        setY(yPos + STEP_COUNT);
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    console.log('Setting up keydown eventlistener');

    //TO-DO: Need to fix this using refs
    // document.addEventListener('keydown', handle_keydown);
  }, [])

  return (
    <div
      className="ball"
      style={{
        left: xPos,
        top: yPos,
      }}
    ></div>
  );
}

export default Ball;
