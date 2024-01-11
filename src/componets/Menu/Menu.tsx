import React from "react";
import styles from './Menu.module.css'
import {Link} from 'react-router-dom'
 


export function Menu() {
  return (
    <div className={styles.Menu}>
        <ul className={styles.MenuList}>
            <li className={styles.MenuListItem}>
                <Link to={'/Piligrim'} className={styles.MunuListItemLink}>
                    <img src={require('./assets/credit-card.png')}/>
                    <p className={styles.MenuName}>Моя карта</p>
                </Link>
            </li>
            <li className={styles.MenuListItem}>
                <Link to={'/map'} className={styles.MunuListItemLink}>
                    <img src={require('./assets/location.png')}/>
                    <p className={styles.MenuName}>Карта партнеров</p>
                </Link>
            </li>
            <li className={styles.MenuListItem}>
                <a className={styles.MunuListItemLink} href="#">
                    <img src={require('./assets/promotions.png')}/>
                    <p className={styles.MenuName}>Акции</p>
                </a>
            </li>
            <li className={styles.MenuListItem}>
                <a className={styles.MunuListItemLink} href="#">
                    <img src={require('./assets/profile.png')}/>
                    <p className={styles.MenuName}>Мой профиль</p>
                </a>
            </li>
          </ul>
        </div>
    )
}

export default Menu

