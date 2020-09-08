import React from 'react'
import classes from '../../App.module.scss'
import Menu from '../../components/Menu/Menu'
import Footer from '../../components/Footer/Footer'

const Layout = ({ children }) => (
  <>
    <Menu/>
    <div className={classes.content}>
      {children}
    </div>
    <Footer/>
  </>
)

export default Layout