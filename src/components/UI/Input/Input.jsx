import React from 'react'
import classes from './Input.module.scss'

const Input = props => {

  const inputType = props.type || 'text'

  return (
    <input
      type={inputType}
      className={classes.Input}
      value={props.value}
      onChange={props.onChange}
    />
  )
}

export default Input
