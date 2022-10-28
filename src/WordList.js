const WordList = (props) => {
    const {isSubmitted, words} = props
    return (
        <ul>
            {
                isSubmitted === true && words.length === 0
                    ? (
                        <p>There are no words that match your search. Please enter another word</p>
                    )
                    : words.map((w) => {
                        return (
                            <li key={w.word}>{w.word}</li>
                        )
                    })

            }
        </ul>
    )

}

export default WordList;