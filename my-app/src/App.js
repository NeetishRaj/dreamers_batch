import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function do_something() {
  console.log("Hello world!");
}

function App() {

  useEffect(() => {
    // This is the area where we can execute any code
    // that needs to be executed right after component
    // mounting
    do_something();

    return () => {
      // this will be executed
      // right after the unmounting of a
      // component
    }
  })


  return (
    <div className="App">
      Learning useEffect() Hook
    </div>
  );
}

export default App;
