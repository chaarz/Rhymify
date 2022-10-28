import { useState } from 'react'

const Form = (props) => {
    const [userInput, setUserInput] = useState("")
    // const [currentWord, setCurrentWord] = useState("")

    // handleUserInput() will track the user's typing
    const handleUserInput = (e) => {
        const input = e.target.value;
        const lowerCaseInput = input.toLowerCase();
        setUserInput(lowerCaseInput);
    }

    return (
        <>
        <form onSubmit={(e) => {
            props.handleGetWords(e, userInput)
            // setCurrentWord(userInput)
            setUserInput('')
            
        }}>
            <label>Enter a word below to find rhymes!</label>
            <input type="text" onChange={(e) => { handleUserInput(e) }} value={userInput} />
            <button>Submit</button>
        </form>
        
        {/* <p>Words that rhyme with {currentWord}</p> */}
        </>
    )

}

export default Form;