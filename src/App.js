import './styles/sass/styles.css';
import { useState } from 'react'
import WordList from './WordList';
import Form from './Form';

function App() {

  const [words, setWords] = useState([])
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [currentWord, setCurrentWord] = useState("")


  // handleGetWords() will perform the network request:
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
        setCurrentWord(userInput)

      })
      .catch(() => {
        alert('Something went wrong - please try again later!')
      })
  }

  return (
    <>
      <header className='wrapper'>
        <h1>rhymify</h1>
        <h2>songwriting made easy</h2>
      </header>
      <main className='wrapper'>
        <section>

          <Form handleGetWords={handleGetWords} />

          <WordList isSubmitted={isSubmitted} words={words} currentWord={currentWord} />

        </section>
      </main>
      <footer>
        <p>Copyright © 2022 <a href="https://junocollege.com/">Juno College</a></p>
      </footer>
    </>
  );
}

export default App;
