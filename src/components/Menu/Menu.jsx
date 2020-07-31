import React from 'react'
import classes from './Menu.module.scss'
import ava from '../../assets/images/Subtract.svg'

export const Menu = () => (
  <header className={classes.Menu}>
    <div className='container'>
      <nav className={classes.Menu__nav}>
        <div className={classes.Menu__emptyBlock}></div>
        <h2>ЦенOff</h2>
        <div className={classes.Menu__rightWrapper}>
          <button className={classes.Menu__btnAdd}></button>

          <div className={classes.Menu__userWrapper}>
            <h3>Ray</h3>

            <img src={ava} alt="" className={classes.Menu__ava}/>
          </div>
        </div>
      </nav>
    </div>
  </header>
)