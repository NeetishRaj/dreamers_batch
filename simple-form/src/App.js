import { useState } from 'react';
import './App.css';

function App() {

  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  
  const handle_Submit =  (e) => {
    // This prevents the auto-refresh of whole during click of submit button.
    e.preventDefault();

    //  Rules for validation

    // We wil take the form data and send it to server
    console.log(`Submitting ${name} and ${age} to server`);
  }

  const is_name_valid = () => {
    if(typeof name === 'string' && name.length > 1)
      return true;
    else
      return false;
  }

  const is_age_valid = () => {
    if(typeof age === 'number' && age > 18)
      return true;
    else
      return false;
  }

  return (
    <div className='container'>
      <h1>Simple React Form</h1>


      <form onSubmit={handle_Submit}>
          <div className='input-field'>
            <label htmlFor="name">Name:</label>
            <input
              className={is_name_valid() ? 'correct' : 'error'}
              type="text" 
              id="name" 
              value={name}
              onInput={(e) => {
                setName(e.target.value);
              }}/>
              {
                !is_name_valid() &&
                <div className="error-message">Name field should not be empty</div>
              }
          </div>

          <div className='input-field'>
            <label htmlFor="age">Age:</label>
            <input 
              type="number" 
              id="age" 
              value={age}
              onInput={(e) => {
                setAge(parseInt(e.target.value));
              }}/>
              {
                !is_age_valid() &&
                <div className="error-message">Age should be greater than 18</div>
              }
          </div>

          <div className='input-field'>
            <input 
              type="submit" 
              value="Submit Form"
              disabled={!is_age_valid() || !is_name_valid()} />
          </div>

      </form>
    </div>
  );
}

export default App;
