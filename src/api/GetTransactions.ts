import axios from 'axios'
import { token } from './ApiFunctions'
import FormatTelegramId from './ApiFunctions'

const GetTransactions = (telegram_id: number, coid_Id: string) => {
    return axios.get(`https://internal-api.cryptobonus.goldapp.ru/api/users/7c421d2b-0263-424b-b33f-${FormatTelegramId(telegram_id)}/coins/${coid_Id}/transactions`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    })
}

export default GetTransactions