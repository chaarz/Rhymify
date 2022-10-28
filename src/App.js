import './App.css';
import { useState } from 'react'
import WordList from './WordList';
import Form from './Form';

function App() {

  const [words, setWords] = useState([])
  const [isSubmitted, setIsSubmitted] = useState(false)
  

  // handleGetWords() will perform the network request
  const handleGetWords = (e, userInput) => {
    e.preventDefault();

    const url = new URL("https://api.datamuse.com/words")
    url.search = new URLSearchParams({
      rel_rhy: userInput
    })

    fetch(url)
      .then((res) => { return res.json() })
      .then((data) => {

        const filteredWords = data.map((d) => {
          return {
            word: d.word
          }
        })

        setWords(filteredWords)
        setIsSubmitted(true)
  

      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <div>
      <header>
        <h1>Rhymify</h1>
      </header>
      <div>

        <Form handleGetWords={handleGetWords}/>

        <WordList isSubmitted={isSubmitted} words={words} />

      </div>
    </div>
  );
}

export default App;
