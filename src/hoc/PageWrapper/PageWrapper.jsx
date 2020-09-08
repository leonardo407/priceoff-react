import React from 'react'
import classes from './PageWrapper.module.scss'

const PageWrapper = ({ children }) => (
  <div className={classes.PageWrapper}>
    {children}
  </div>
)

export default PageWrapper