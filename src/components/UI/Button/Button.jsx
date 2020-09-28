import React from 'react'
import classes from './Button.module.scss'

const Button = ({ children, onClick }) => (
  <button className={classes.Button} onClick={onClick}>{children}</button>
)

export default Button