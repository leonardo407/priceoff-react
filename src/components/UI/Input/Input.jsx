import React from 'react'
import classes from './Input.module.scss'

const Input = ({ type, value, onChange, id, placeholder }) => {

  const inputType = type || 'text'

  return (
    <input
      type={inputType}
      className={classes.Input}
      value={value}
      onChange={onChange}
      id={id}
      placeholder={placeholder}
    />
  )
}

export default Input
