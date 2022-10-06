import logo from './logo.svg';
import './App.css';
import ContactCard from './components/ContactCard';

import users from './data/Users';
import { useState } from 'react';

function App() {

  return (
    <div className="App">
      {
        users.map(item => <ContactCard user={item}/>)
      }

      <ContactCard user={users[0]}/>
      <ContactCard user={users[3]}/>
    </div>
  );
}

export default App;
