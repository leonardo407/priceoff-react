import React from 'react'
import classes from './Button.module.scss'

const Button = props => (
  <button className={classes.Button}>{props.children}</button>
)

export default Button