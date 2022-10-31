import { useState } from "react";
import { Link, Router } from "react-router-dom";

function SearchComponent() {
    const [text, setText] = useState('');
    const [search_link, set_search_link] = useState('https://google.com');
    
    const submit_handler = () => {
        const url =  `https://google.com?q=${text}`;
        set_search_link(url);
    }

    return (
        <div className="search-field">
            <input 
                type="text"
                placeholder="search in Google"
                value={text}
                onInput={(e) => {setText(e.target.value)}}/>

            <input type="submit" value="Generate Link" onClick={submit_handler}/>

            <br />
            <hr />
            <br/>

            <a href={search_link} target="_blank">Search Link</a>
        </div>
        
    );
}

export default SearchComponent;