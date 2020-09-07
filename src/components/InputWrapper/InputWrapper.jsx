import React from 'react'
import classes from './InputWrapper.module.scss'

const InputWrapper = ({ label, children, required, id }) => {

  const labelClasses = [classes.Label]

  if (required) {
    labelClasses.push(classes.LabelRequired)
  }

  return (
    <div className={classes.InputWrapper}>
      <label htmlFor={id} className={labelClasses.join(' ')}>
        {label}
      </label>

      {children}
    </div>
  )

}

export default InputWrapper