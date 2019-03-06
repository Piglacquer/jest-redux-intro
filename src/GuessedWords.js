import React from 'react'
import PropTypes from 'prop-types'

const GuessedWords = (props) => {
  return (
    <div data-test='component-guessed-words'>
      { props.guessedWords.length === 0
        ? <span data-test='guess-instructions'>Attempt to guess the secret word!</span>
        : null
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
