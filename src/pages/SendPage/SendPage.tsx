import { BackButton, MainButton } from '@vkruglikov/react-telegram-web-app';
import { Input, Form, Select, Button } from 'antd';
import { useNavigate, useLocation, Location } from 'react-router-dom';
import { useState } from 'react';
import styles from './SendPage.module.css'
import useTelegram from '../../hooks/useTelegram';
import TransferCoin from '../../api/TransferCoin';
import { ICoin } from '../../Interfaces';

const SendPage = () => {
    const { state }: Location<ICoin[]> = useLocation();
    const {user} = useTelegram();
    let navigate = useNavigate();

    const [coinId, setCoinId] = useState<string>('')
    const [cost, setCost] = useState<number>(0)
    const [wallet, setWallet] = useState<string>('')
    const [error, setError] = useState('')
    
    const searchIdCoin = (nameCoin: string) => {
        let foundCoin = state.find(item => item.name === nameCoin);
        if (foundCoin) setCoinId(foundCoin.id)
    }

    return (  
        <div className={styles.container}>
            {error}
            <BackButton onClick={ () => navigate(-1) }/>
            <Form
                labelCol={{ span: 6 }}
                name="HapticFeedbackDemo"
                layout="vertical"
                autoComplete="off"
                size='large'>
                <Form.Item label="Отправить" className={styles.label}>
                    <Select onChange={value => searchIdCoin(value)}>
                        {state.map((item, index) => (
                            <Select.Option className={styles.input} key={index} value={item.name}>{item.name}</Select.Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item
                    name="balance_nano"
                    label="Количество">               
                    <Input     
                        value={cost}
                        placeholder="0" 
                        onChange={e => setCost(parseInt(e.target.value) * 1000000000)}/>
                </Form.Item>
                <Form.Item
                    name="wallet"
                    label="TON кошелек" 
                    className={styles.label}>
                    <Input 
                        value={cost}
                        onChange={e => setWallet(e.target.value)}/>
                </Form.Item>
            </Form>
{/* <Button onClick={() => {
    TransferCoin({
        telegram_id: 968615914,
        address: wallet,
        amount_nano: cost,
        coin_id: coinId
    })
    .then(res => res.data)
    .then(res => navigate('/Piligrim/', {state: res.request_id}))
    .catch(err => setError(err))
}}>Отправить</Button> */}

            <MainButton text="Отправить" onClick={() => {
                TransferCoin({
                telegram_id: user.id,
                address: wallet,
                amount_nano: cost,
                coin_id: coinId
            })
            .then(res => res.data)
            .then(res => navigate('/Piligrim/', {state: res.request_id}))
            .catch(err => setError(err))
            }} />
        </div>
    )
}

export default SendPage