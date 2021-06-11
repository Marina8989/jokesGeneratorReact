import React, {useState, useEffect} from 'react';
import './index.css';

let API_KEY = 'http://api.icndb.com/jokes/random';

function App() {
    const [joke, setJoke] = useState('');

    const handleClick = () => {
       fetch(API_KEY)
         .then(res => res.json())
         .then(data => setJoke(data.value.joke));
    }

    useEffect(() => {
       handleClick();
    }, [])

    return (
        <div className="jokeModal">
           <h3>Chuck Norris Jokes Generator</h3>
           <p dangerouslySetInnerHTML = {{__html: joke}}></p>
           <button onClick={handleClick}>Next joke</button>
        </div>
    )
}

export default App