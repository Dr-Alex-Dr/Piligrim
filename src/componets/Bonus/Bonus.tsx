import React from "react";
import styles from './Bonus.module.css'
import { IBonus } from "../../Interfaces";

const Bonus = (props: IBonus) => {
    const { 
        id,
        image, 
        name, 
        balance_nano 
    } = props

    return (
        <div className={styles.Bonus}> 
            <div className={styles.BonusImg}>
                <img src={image}/>
            </div>              
            <div className={styles.BonusWrapper}>         
                <p className={styles.BonusName}>{name}</p>
                <p className={styles.BonusBalace}>{balance_nano}₽</p>      
            </div>         
        </div>
    )
}

export default Bonus