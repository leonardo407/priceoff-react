import React from 'react'
import classes from './CardProduct.module.scss'
import PropTypes from 'prop-types'
import infoIcon from '../../assets/images/info.svg'

const CardProduct = ({ category, title, address, description, date, img }) => {

  return (
    <div className={classes.CardProduct}>
      <div className={classes.imgWrapper}>
        <img className={classes.img}
             src={img}
             alt=""/>
      </div>


      <div className={classes.body}>
        <p className={classes.category}>{category}</p>

        <h3 className={classes.title}>{title}</h3>

        <p className={classes.address}>{address}</p>

        <p className={classes.description}>{description}</p>

        <div className={classes.bottomWrapper}>
          <p className={classes.date}>{date}</p>

          <img src={infoIcon} alt=""/>
        </div>
      </div>
    </div>
  )
}

CardProduct.propTypes = {
  category: PropTypes.string,
  title: PropTypes.string,
  address: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.string,
  img: PropTypes.string,
}

export default CardProduct