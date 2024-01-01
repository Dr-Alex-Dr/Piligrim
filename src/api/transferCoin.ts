const token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzX2luIjoiMTk3MC0wMS0wMVQwMDowMDowMFoiLCJzZXJ2aWNlX25hbWUiOiJ0ZXN0In0.Gi8QZy-APTzsfXxIgCQ_MTAfNTbC7bhus9JNfjCraVI';

export function transferCoin(address: string, coin_id: string, amount_nano: number, comment: string, telegram_id: number) {
    let transferProps = {
        address,
        coin_id,
        amount_nano,
        comment
    }

    return new Promise((resolve, reject) => {
        fetch(`https://internal-api.cryptobonus.goldapp.ru/api/users/${formatTelegramId(telegram_id)}/transfer_coin`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(transferProps),
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



