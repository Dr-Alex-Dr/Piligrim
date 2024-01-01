import React, {useState} from 'react';
import { Bonus } from '../Bonus/Bonus';
import styles from './OtherBonuses.module.css'
import classNames from 'classnames';
import { HiMiniChevronDown } from "react-icons/hi2";


interface BonusItem {
  img: string;
  name: string;
  balance: string;
}

interface OtherBonusesProps {
  bonusList: BonusItem[];
}

const OtherBonuses = ({bonusList}: OtherBonusesProps) => {
  const [visibility, setVisibility] = useState(false)

  return (
    <div>
      <div 
        className={classNames(styles.OtherBonusesWrapper, {[styles.open]: visibility})} 
        onClick={() => {setVisibility(true)}}>
        <div className={styles.OtherBonusesImages} >
          <div className={styles.OtherBonusesImageFirt}>
            <img className={styles.Image} src={bonusList[0].img} alt={bonusList[0].name}/>
          </div>
          <div className={styles.OtherBonusesImageSecond}>
            <img className={styles.Image} src={bonusList[1].img} alt={bonusList[1].name}/>
          </div>
        </div>
        <p className={styles.OtherBonusesTitle}>Другие активы</p>
        <HiMiniChevronDown className={styles.arrow}/>        
      </div> 
      {
        visibility && bonusList.map((item, index) => ( 
          <Bonus key={index} img={item.img} name={item.name} balance={item.balance} index={index}/>
        ))
      }
    </div>
  );
}

export default OtherBonuses