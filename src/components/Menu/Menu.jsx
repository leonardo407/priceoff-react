import React from 'react'
import classes from './Menu.module.scss'
import ava from '../../assets/images/Subtract.svg'

const Menu = () => (
  <header className={classes.Menu}>
    <div className='container'>
      <nav className={classes.Nav}>
        <div className={classes.EmptyBlock}>
        </div>

        <h2>ЦенOff</h2>

        <div className={classes.RightWrapper}>
          <button className={classes.BtnAdd}>
          </button>

          <div className={classes.UserWrapper}>
            <h3>Ray</h3>

            <img src={ava} alt="" className={classes.Ava}/>
          </div>
        </div>

      </nav>
    </div>
  </header>
)

export default Menu