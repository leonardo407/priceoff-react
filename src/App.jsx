import React from 'react'
import classes from './App.module.scss'
import { Menu } from './components/Menu/Menu'
import { Footer } from './components/Footer/Footer'

function App() {
  return (
    <div className={classes.App}>
      <Menu/>
      <div className={classes.App__content}></div>
      <Footer/>
    </div>
  )
}

export default App
