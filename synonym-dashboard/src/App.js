import { useEffect, useState } from 'react';
import './App.css';

function App() {
  let [syn, setSyn] = useState([]);
  let [searchWord, setSearchWord] = useState('sun')
  
  const fetchSynonyms = async (word = searchWord) => {
    let response = await fetch(`https://api.datamuse.com/words?ml=${word}&sp=*a&max=20`);
    let synonyms = await response.json();
    setSyn(synonyms.map(item => item.word));
  }

  useEffect(() => {
    fetchSynonyms();
  }, [])

  const handleOnInput = (e) => {
    setSearchWord(e.target.value);
  }

  const findSynonyms = () => {
    fetchSynonyms(searchWord)
  }

  return (
    <div className="App">
      <div className='search-bar'>
        <input 
          className='search-input'
          type="text" 
          name="search" 
          id="search" 
          placeholder='Enter the search word'
          value={searchWord} 
          onInput={handleOnInput}/>

        <button 
          className='search-button'
          onClick={findSynonyms}>
          <span className="material-symbols-outlined">
            search
          </span>
        </button>
      </div>
      <ol>
        {syn.map((item, index) => (<li key={index}>{item}</li>))}
      </ol>
    </div>
  );
}

export default App;
