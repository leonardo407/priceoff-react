import React from 'react'
import classes from './CardProduct.module.scss'
import infoIcon from '../../assets/images/info.svg'

const CardProduct = props => (
  <div className={classes.CardProduct}>
    <img className={classes.img}
         src="https://static.probusiness.io/720x480c/n/03/d/38097027_439276526579800_2735888197547458560_n.jpg" alt=""/>

    <div className={classes.body}>
      <p className={classes.category}>{props.category}</p>

      <h3 className={classes.title}>{props.title}</h3>

      <p className={classes.address}>{props.address}</p>

      <p className={classes.description}>{props.description}</p>

      <div className={classes.bottomWrapper}>
        <p className={classes.date}>{props.date}</p>

        <img src={infoIcon} alt=""/>
      </div>
    </div>
  </div>
)

export default CardProduct