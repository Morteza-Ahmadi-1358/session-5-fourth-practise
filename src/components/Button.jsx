import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button type="submit" className='btn btn-outline-danger w-50 d-block mx-auto' disabled={props.isDisabled}>ورود</button>
    </div>
  )
}

export default Button