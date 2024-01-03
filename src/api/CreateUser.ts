import axios from 'axios'
import FormatTelegramId from './ApiFunctions'
import { token } from './ApiFunctions'

const CreateUser  = (telegram_id: number) => {
    return axios.post(`https://internal-api.cryptobonus.goldapp.ru/api/users`, {
        id: `7c421d2b-0263-424b-b33f-${FormatTelegramId(telegram_id)}`
    }, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    })
}

export default CreateUser 