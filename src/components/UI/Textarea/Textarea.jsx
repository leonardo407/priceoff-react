import React from 'react'
import classes from './Textarea.module.scss'

const Textarea = ({ value, onChange, id }) => {
  return (
    <textarea
      className={classes.Textarea}
      value={value}
      onChange={onChange}
      id={id}
    >
    </textarea>
  )
}

export default Textarea