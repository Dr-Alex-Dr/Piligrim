import React, { useEffect, useState } from 'react';
import Bonus from '../../componets/Bonus/Bonus';
import OtherBonuses from '../../componets/Accordion/OtherBonuses';
import Commands from '../../componets/Commands/Commands';
import Menu from '../../componets/Menu/Menu';
import Transactions from '../../componets/Transactions/Transactions';
import GetUserData from '../../api/GetUserData';
import axios from 'axios';
import styles from './Home.module.css'
import { ICoin } from '../../Interfaces';
import { exampleCoin } from '../../Interfaces';
import { useLocation } from "react-router-dom";


const Home = () => {
    const { state } = useLocation();
    // console.log(state)

    const [coins, setCoins] = useState<ICoin[]>([])
    const [otherBonuses, setOtherBonuses] = useState<ICoin[]>([])
    const [currentBonus, setCurrentBonus] = useState<ICoin>(exampleCoin)

    const fetchData = async () => {
        const getUserDataResponse = await GetUserData(968615914);
        const userData = getUserDataResponse.data;
        setCurrentBonus(userData.data.coins[0])
        setCoins([...userData.data.coins]);
    }

    useEffect(() => {
        let deleteCurrentBonus = coins.filter(item => item.id !== currentBonus.id)
        setOtherBonuses([...deleteCurrentBonus])
    }, [currentBonus])

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        console.log('Платеж отправлен 1')
        fetchData()
    }, [state])

    const visualizesCoins = () => {
        const renderBonus = (coin: ICoin) => (
            <Bonus
                key={coin.id}
                id={coin.id}
                image={coin.image}
                name={coin.name}
                balance_nano={coin.balance_nano}
                otherBonuses={otherBonuses}
                currentBonus={currentBonus}
                setCurrentBonus={setCurrentBonus}
            />
        );
        
        if (otherBonuses.length > 0) {      
            return (
                <>
                    {renderBonus(currentBonus)}
                    {otherBonuses.length === 1 && otherBonuses.map(renderBonus)}
                    {otherBonuses.length > 1 && 
                    <OtherBonuses 
                        bonusList={otherBonuses}
                        otherBonuses={otherBonuses}
                        currentBonus={currentBonus}
                        setCurrentBonus={setCurrentBonus} 
                    />}
                </>
            );
        }
    }


    return (
        <div className={styles.container}>
        <div className={styles.imageContainer}>
            {currentBonus.id && <img className={styles.image} src={require(`../../assets/${currentBonus.id}.jpg`)}/>}
        </div>
        <Commands coins={coins}/>
        {visualizesCoins()} 
                      
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
