import React, {Dispatch, SetStateAction} from "react";
import styles from './Bonus.module.css'
import { IBonus } from "../../Interfaces";
import { ICoin } from "../../Interfaces";

interface IBonusProps {
    otherBonuses: ICoin[]
    currentBonus: ICoin,
    setCurrentBonus: Dispatch<SetStateAction<ICoin>>,
}

const Bonus = (props: IBonus & IBonusProps) => {
    const { 
        id,
        image, 
        name, 
        balance_nano,
        otherBonuses,
        currentBonus,
        setCurrentBonus
    } = props

    const selectCoin = () => {
        let foundIndexCoin = otherBonuses.findIndex(item => item.id === id);
        if (foundIndexCoin !== -1) {
            setCurrentBonus(otherBonuses[foundIndexCoin])
        }
    }

    return (
        <div className={styles.Bonus} onClick={() => {selectCoin()}}> 
            <div className={styles.BonusImg}>
                <img src={image}/>
            </div>              
            <div className={styles.BonusWrapper}>         
                <p className={styles.BonusName}>{name}</p>
                <p className={styles.BonusBalace}>{balance_nano / 1000000000} ₽</p>      
            </div>         
        </div>
    )
}

export default Bonus