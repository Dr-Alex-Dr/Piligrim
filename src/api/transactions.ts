
const token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzX2luIjoiMTk3MC0wMS0wMVQwMDowMDowMFoiLCJzZXJ2aWNlX25hbWUiOiJ0ZXN0In0.Gi8QZy-APTzsfXxIgCQ_MTAfNTbC7bhus9JNfjCraVI';

const headers = new Headers({
  'Authorization': `Bearer ${token}`,
});

export function getCoins(telegram_id: number, coid_id: string) {
    return new Promise((resolve, reject) => {
        fetch(`https://internal-api.cryptobonus.goldapp.ru/api/users/${formatTelegramId(telegram_id)}/coins/${coid_id}`, {
            method: 'GET',
            headers: headers,
        })
        .then(response => {
            resolve(response)
        })
    })  
}

function formatTelegramId(telegramId: number): string {
    const formattedId: string = telegramId.toString().padStart(12, '0');
    return formattedId;
}



