import React from "react";
import styles from './Menu.module.css'


export function Menu() {
  return (
    <div className={styles.Menu}>
        <ul className={styles.MenuList}>
            <li className={styles.MenuListItem}>
                <a className={styles.MunuListItemLink} href="#">
                    <img src="./assets/icons/credit-card.png"/>
                    <p>Моя карта</p>
                </a>
            </li>
            <li className={styles.MenuListItem}>
                <a className={styles.MunuListItemLink} href="#">
                    <img src="./assets/icons/location.png"/>
                    <p>Карта партнеров</p>
                </a>
            </li>
            <li className={styles.MenuListItem}>
                <a className={styles.MunuListItemLink} href="#">
                    <img src="./assets/icons/promotions.png"/>
                    <p>Акции</p>
                </a>
            </li>
            <li className={styles.MenuListItem}>
                <a className={styles.MunuListItemLink} href="#">
                    <img src="./assets/icons/profile.png"/>
                    <p>Мой профиль</p>
                </a>
            </li>
          </ul>
        </div>
    )
}

export default Menu

