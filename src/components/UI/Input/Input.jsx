import React from 'react'
import classes from './Input.module.scss'

const Input = ({type, value, onChange}) => {

  const inputType = type || 'text'

  return (
    <input
      type={inputType}
      className={classes.Input}
      value={value}
      onChange={onChange}
    />
  )
}

export default Input
