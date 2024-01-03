import React, { useEffect, useState } from 'react';
import { MainButton, useShowPopup } from '@vkruglikov/react-telegram-web-app';
import Bonus from '../../componets/Bonus/Bonus';
import OtherBonuses from '../../componets/Accordion/OtherBonuses';
import Commands from '../../componets/Commands/Commands';
import Menu from '../../componets/Menu/Menu';
import Transactions from '../../componets/Transactions/Transactions';
import { getCoins } from '../../api/getCoins';
import styles from './Home.module.css'


const Home = ({coins}: any) => {
    return (
        <div className={styles.container}>
            <img className={styles.image} src='backpiligrim.jpg'/>
            <Commands />
            <div>
                <Bonus img="1.png" name="Piligrim Bonus" balance='3,4' />
            </div>
            <OtherBonuses bonusList={[
          { 
            img: "2.png",
            name: "Piligrim Bonus",
            balance: "3,4"     
          },
          {
            img: "3.png",
            name: "Piligrim Bonus",
            balance: "3,4"     
          }
        ]}/>
        <Transactions HistoryList={[
          { date: '2023-01-01', quantity: '10', type: 'RECEIVED' },
          { date: '2023-01-02', quantity: '15', type: 'RECEIVED' },
          { date: '2023-01-03', quantity: '20', type: 'RECEIVED' },
        ]}/>
        <Menu />
      </div>
  );
}

export default Home;
