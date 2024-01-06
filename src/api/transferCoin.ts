import axios from "axios"
import { token } from "./ApiFunctions"
import FormatTelegramId from "./ApiFunctions"

interface TransferCoinProps {
    telegram_id: number,
    address: string,
    amount_nano: number,
    coin_id: string,
}

const TransferCoin = (props: TransferCoinProps) => {
    const {
        telegram_id,
        address,
        amount_nano,
        coin_id,
    } = props

    return axios.post(`https://internal-api.cryptobonus.goldapp.ru/api/users/7c421d2b-0263-424b-b33f-${FormatTelegramId(telegram_id)}/transfer_coin`, {
        address,
        coin_id,
        amount_nano,
        comment: '-'
    }, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
}

export default TransferCoin
