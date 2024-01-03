import React, {useState} from 'react';
import Bonus from '../Bonus/Bonus';
import styles from './OtherBonuses.module.css'
import classNames from 'classnames';
import { HiMiniChevronDown } from "react-icons/hi2";
import { IBonus } from '../../Interfaces';
import { ICoin } from '../../Interfaces';

interface OtherBonusesProps {
  bonusList: ICoin[];
}

const OtherBonuses = ({bonusList}: OtherBonusesProps) => {
  const [visibility, setVisibility] = useState(false)

  return (
    <div className={styles.container}>
      <div 
        className={classNames(styles.OtherBonusesWrapper, {[styles.open]: visibility})} 
        onClick={() => {setVisibility(true)}}>
        <div className={styles.OtherBonusesImages} >
          <div className={styles.OtherBonusesImageFirt}>
            <img className={styles.Image} src={bonusList[0].image} alt={bonusList[0].name}/>
          </div>
          <div className={styles.OtherBonusesImageSecond}>
            <img className={styles.Image} src={bonusList[1].image} alt={bonusList[1].name}/>
          </div>
        </div>
        <p className={styles.OtherBonusesTitle}>Другие активы</p>
        <HiMiniChevronDown className={styles.arrow}/>        
      </div> 
      {
        visibility && bonusList.map((item, index) => ( 
          <Bonus key={index} id={item.id} image={item.image} name={item.name} balance_nano={item.balance_nano}/>
        ))
      }
    </div>
  );
}

export default OtherBonuses