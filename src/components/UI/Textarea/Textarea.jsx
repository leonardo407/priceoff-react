import React from 'react'
import classes from './Textarea.module.scss'

const Textarea = ({ value, onChange, id, placeholder }) => {
  return (
    <textarea
      className={classes.Textarea}
      value={value}
      onChange={onChange}
      id={id}
      placeholder={placeholder}
    >
    </textarea>
  )
}

export default Textarea