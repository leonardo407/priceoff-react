import React from 'react'
import classes from '../../App.module.scss'
import { Menu } from '../../components/Menu/Menu'
import { Footer } from '../../components/Footer/Footer'

export const Layout = props => (
  <>
    <Menu/>
    <div className={classes.App__content}>
      {props.children}
    </div>
    <Footer/>
  </>
)