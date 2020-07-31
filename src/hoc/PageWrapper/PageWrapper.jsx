import React from 'react'
import classes from './PageWrapper.module.scss'

export const PageWrapper = props => (
  <div className={classes.PageWrapper}>
    {props.children}
  </div>
)