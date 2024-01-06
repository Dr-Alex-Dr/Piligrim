import axios from 'axios'
import { token } from './ApiFunctions'
import FormatTelegramId from './ApiFunctions'

const GetUserData = (telegram_id: number) => {
    return axios.get(`https://internal-api.cryptobonus.goldapp.ru/api/users/7c421d2b-0263-424b-b33f-${FormatTelegramId(telegram_id)}`, {
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    }) 
}

export default GetUserData