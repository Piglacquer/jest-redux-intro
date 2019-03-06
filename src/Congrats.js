import React from 'react'
import PropTypes from 'prop-types'

const Congrats = (props) => {
  return (
    props.success
      ? <div data-test='component-congrats'>
        <span data-test='congrats-message'>Congratulations, you win!</span>
      </div>
      : <div data-test='component-congrats' />
  )
}

Congrats.propTypes = {
  success: PropTypes.bool.isRequired
}

export default Congrats
