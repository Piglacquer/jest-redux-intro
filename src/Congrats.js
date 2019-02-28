import React from 'react'

const Congrats = (props) => {
  return (
    props.success
      ? <div data-test='component-congrats'>
        <span data-test='congrats-message'>Congratulations, you win!</span>
      </div>
      : <div data-test='component-congrats' />
  )
}

export default Congrats
