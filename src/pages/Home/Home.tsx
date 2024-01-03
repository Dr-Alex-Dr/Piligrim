import React, { useEffect, useState } from 'react';
import { MainButton, useShowPopup } from '@vkruglikov/react-telegram-web-app';
import Bonus from '../../componets/Bonus/Bonus';
import OtherBonuses from '../../componets/Accordion/OtherBonuses';
import Commands from '../../componets/Commands/Commands';
import Menu from '../../componets/Menu/Menu';
import Transactions from '../../componets/Transactions/Transactions';
import axios from 'axios';
import styles from './Home.module.css'
import { ICoin } from '../../Interfaces';
import { IBonus } from '../../Interfaces';

interface ICoinProps {
    coins: ICoin[] 
}

const exampleCoin: ICoin = {
    address: "",
    balance_nano: 0,
    balance_ok: true,
    created_at: "",
    description: "",
    id: "",
    image: "",
    is_oem: false,
    is_self_writing: true,
    name: "",
    price_oem_nano: 0,
    symbol: "",
    updated_at: "",
  };

const Home = ({coins}: ICoinProps) => {
    const [otherBonuses, setOtherBonuses] = useState<ICoin[]>([])
    const [currentBonus, setCurrentBonus] = useState<ICoin>(exampleCoin)

    useEffect(() => {     
        setOtherBonuses([...coins.slice(1)])
        setCurrentBonus(coins[0])
    }, [])

    const visualizesCoins = () => {
        const renderBonus = (coin: ICoin) => (
            <Bonus
                key={coin.id}
                id={coin.id}
                image={coin.image}
                name={coin.name}
                balance_nano={coin.balance_nano}
            />
        );
        
        if (otherBonuses.length > 0) {
            console.log(otherBonuses)
            return (
                <>
                    {renderBonus(currentBonus)}
                    {otherBonuses.length === 1 && otherBonuses.map(renderBonus)}
                    {otherBonuses.length > 1 && <OtherBonuses bonusList={otherBonuses} />}
                </>
            );
        }
    }


    return (
        <div className={styles.container}>
            <img className={styles.image} src='backpiligrim.jpg'/>
            <Commands />
            {
                visualizesCoins()
            }
            
            
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
