import React from 'react'
import PropTypes from 'prop-types'

const renderGuessedWords = (arrayOfWords) => {
  return arrayOfWords.map((word, i) => {
    return (
      <div data-test='guessed-word' key={word.guessedWord + i}>
        <h3>{word.guessedWord}</h3>
        <span>{word.letterMatchCount}</span>
      </div>
    )
  })
}
const GuessedWords = (props) => {
  return (
    <div data-test='component-guessed-words'>
      { props.guessedWords.length === 0
        ? <span data-test='guess-instructions'>Attempt to guess the secret word!</span>
        : <div data-test='guessed-words'>
          {renderGuessedWords(props.guessedWords)}
        </div>
      }
    </div>
  )
}

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired
    })
  ).isRequired
}

export default GuessedWords
