import React from 'react'
import classes from './InputWrapper.module.scss'

const InputWrapper = props => {

  const labelClasses = [classes.InputWrapper__label]

  if (props.required) {
    labelClasses.push(classes.InputWrapper__labelRequired)
  }

  return (
    <div className={classes.InputWrapper}>
      <label htmlFor="" className={labelClasses.join(' ')}>{props.label}</label>

      {props.children}
    </div>
  )

}

export default InputWrapper