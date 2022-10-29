const WordList = (props) => {
    const { isSubmitted, words, currentWord } = props
 
    return (
        <section>
            {
                isSubmitted === true
                    ? words.length !== 0
                        ? <>
                            <p>Rhymes for {currentWord} :</p>
                            <ul>
                                {words.map((w) => {
                                    return (
                                        <li key={w.word}>{w.word}</li>
                                    )
                                })
                                }
                            </ul>
                        </>
                        : <p>There are no words that match your search. Please enter another word!</p>
                    : null
            }
        </section>
    )

}

export default WordList;