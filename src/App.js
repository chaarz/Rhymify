import './App.css';
import { useState } from 'react'
import WordList from './WordList';


function App() {

  const [words, setWords] = useState([])
  const [userInput, setUserInput] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Will perform the network request
  const handleGetWords = (e) => {
    e.preventDefault();

    const url = new URL("https://api.datamuse.com/words")
    url.search = new URLSearchParams({
      rel_rhy: userInput
    })

    fetch(url)
      .then((res) => { return res.json() })
      .then((data) => {
        // data from api is likely an array []

        const filteredWords = data.map((d) => {
          return {
            word: d.word
          }
        })

        setWords(filteredWords)
        setIsSubmitted(true)
        setUserInput('')
      })
      .catch((error) => {
        console.error(error)
      })
  }
  // This will track the users typing
  const handleUserInput = (e) => {
    const input = e.target.value;
    const lowerCaseInput = input.toLowerCase();
    setUserInput(lowerCaseInput);
  }
  return (
    <div>
      <header>
        <h1>Rhymify</h1>
      </header>
      <div>
        <form>
          <label>Enter a word below to find rhymes!</label>
          <input type="text" onChange={(e) => { handleUserInput(e) }} value={userInput} />
          <button onClick={(e) => { handleGetWords(e) }}>Submit</button>
        </form>

        <WordList isSubmitted={isSubmitted} words={words}/>


      </div>
    </div>
  );
}

export default App;
