import React, {useState, useEffect} from 'react';

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
        <div>
           <h3>Chuck Norris Jokes Generator</h3>
           <p>{joke}</p>
           <button onClick={handleClick}>Next joke</button>
        </div>
    )
}

export default App