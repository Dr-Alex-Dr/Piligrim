
const token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzX2luIjoiMTk3MC0wMS0wMVQwMDowMDowMFoiLCJzZXJ2aWNlX25hbWUiOiJ0ZXN0In0.Gi8QZy-APTzsfXxIgCQ_MTAfNTbC7bhus9JNfjCraVI';

const headers = new Headers({
  'Authorization': `Bearer ${token}`,
});

export function addUser(telegram_id: number) {
    return new Promise((resolve, reject) => {
        fetch(`https://internal-api.cryptobonus.goldapp.ru/api/users/7c421d2b-0263-424b-b33f-${formatTelegramId(telegram_id)}`, {
            method: 'GET',
            headers: headers,
        })
        .then(response => {
            if (response.status !== 200) {
              fetch(`https://internal-api.cryptobonus.goldapp.ru/api/users`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({id: `7c421d2b-0263-424b-b33f-${formatTelegramId(telegram_id)}`}),
              })

              resolve(true)
            }
        })
        .then(res => {
            resolve(true)
        })
    })  
}
function formatTelegramId(telegramId: number): string {
    const formattedId: string = telegramId.toString().padStart(12, '0');
    return formattedId;
}

