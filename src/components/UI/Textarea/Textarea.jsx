import React from 'react'
import classes from './Textarea.module.scss'

const Textarea = ({value, onChange}) => {
  return (
    <textarea
      className={classes.Textarea}
      value={value}
      onChange={onChange}
    >
    </textarea>
  )
}

export default Textarea