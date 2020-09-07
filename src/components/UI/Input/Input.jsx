import React from 'react'
import classes from './Input.module.scss'

const Input = ({ type, value, onChange, id }) => {

  const inputType = type || 'text'

  return (
    <input
      type={inputType}
      className={classes.Input}
      value={value}
      onChange={onChange}
      id={id}
    />
  )
}

export default Input
