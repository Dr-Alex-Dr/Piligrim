const tg = window.Telegram.WebApp


const useTelegram = () => {
    const ready = () => {
        tg.ready()
    }

    return {
        ready,
        tg,
        user: tg.initDataUnsafe?.user
    }
}

export default useTelegram