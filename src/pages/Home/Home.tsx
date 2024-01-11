import React, { useEffect, useState } from 'react';
import Bonus from '../../componets/Bonus/Bonus';
import OtherBonuses from '../../componets/Accordion/OtherBonuses';
import Commands from '../../componets/Commands/Commands';
import Menu from '../../componets/Menu/Menu';
import Transactions from '../../componets/Transactions/Transactions';
import GetTransactions from '../../api/GetTransactions';
import GetUserData from '../../api/GetUserData';
import styles from './Home.module.css'
import { ICoin } from '../../Interfaces';
import { ITransaction } from '../../Interfaces';
import { exampleCoin } from '../../Interfaces';

const Home = () => {
    const [coins, setCoins] = useState<ICoin[]>([])
    const [otherBonuses, setOtherBonuses] = useState<ICoin[]>([])
    const [currentBonus, setCurrentBonus] = useState<ICoin>(exampleCoin)
    const [transactions, setTransactions] = useState<ITransaction[]>([])

    const getDataCoins = async () => {
        try {
            const getUserDataResponse = await GetUserData(968615914)
            return getUserDataResponse.data
        }
        catch(err) {
            console.error(err);
        }
    }

    const getDataTransactions = async (coin_Id: string) => {
        try {
            const getResponseTransactions = await GetTransactions(968615914, coin_Id)
            const transactionData = getResponseTransactions.data
            setTransactions(transactionData.data)
        }
        catch(err) {
            console.error(err);
        }
    }

    useEffect(() => {   
        if (coins.length !== 0) {
            let deleteCurrentBonus = coins.filter(item => item.id !== currentBonus.id)
            setOtherBonuses([...deleteCurrentBonus])
            getDataTransactions(currentBonus.id)
        }      
    }, [currentBonus])

    useEffect(() => {
        getDataCoins()
            .then(res => res.data)
            .then(res => {
                setCurrentBonus(res.coins[0])
                getDataTransactions(res.coins[0].id)
                setCoins([...res.coins]);
            })     
    }, [])


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
        <Transactions transactions={transactions}/> 
        <Menu />
      </div>
  );
}

export default Home;
