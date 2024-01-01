import React from "react";
import styles from './Bonus.module.css'


interface BonusProps {
    img: string,
    name: string,
    balance: string
}

export function Bonus(props: BonusProps) {
    const { 
        img, 
        name, 
        balance 
    } = props

    return (
        <div className={styles.Bonus}> 
            <div className={styles.BonusImg}>
                <img src={img}/>
            </div>              
            <div className={styles.BonusWrapper}>         
                <p className={styles.BonusName}>{name}</p>
                <p className={styles.BonusBalace}>{balance}₽</p>      
            </div>         
        </div>
    )
}