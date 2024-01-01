
const token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzX2luIjoiMTk3MC0wMS0wMVQwMDowMDowMFoiLCJzZXJ2aWNlX25hbWUiOiJ0ZXN0In0.Gi8QZy-APTzsfXxIgCQ_MTAfNTbC7bhus9JNfjCraVI';

export function getCoins(telegram_id: number) {
    return new Promise((resolve, reject) => {
        fetch(`https://internal-api.cryptobonus.goldapp.ru/api/users/7c421d2b-0263-424b-b33f-${formatTelegramId(telegram_id)}`, {
            method: 'GET',
            mode: "cors",
            headers: {
                'Authorization': `Bearer ${token}`
            },
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



