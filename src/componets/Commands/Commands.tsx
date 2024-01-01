import React from 'react';
import styles from './Commands.module.css'
import { HiArrowUpCircle } from "react-icons/hi2";
import { HiArrowDownCircle } from "react-icons/hi2";
import { BsCreditCard2BackFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import { MainButton, useShowPopup } from '@vkruglikov/react-telegram-web-app';


const Commands = () => {
  const showPopup = useShowPopup();
  
  const handleClick = () =>
    showPopup({
      message: 'popup',
    });

  return (
    <div className={styles.AppCommands}>
      <ul className={styles.AppCommandsList}>
        <li className={styles.AppCommandsListItem} onClick={handleClick}>
          <IconContext.Provider value={{ color: "#6AB2F2", size: '27' }}>
            <div>
              <HiArrowUpCircle />
            </div>
          </IconContext.Provider>
          <p>Отправить</p>
        </li>
        <li className={styles.AppCommandsListItem} onClick={handleClick}>
          <IconContext.Provider value={{ color: "#6AB2F2", size: '27' }}>
            <div>
              <HiArrowDownCircle />
            </div>
          </IconContext.Provider>
          <p>Получить</p>
        </li>
        <li className={styles.AppCommandsListItem} onClick={handleClick}>
          <IconContext.Provider value={{ color: "#6AB2F2", size: '27' }}>
            <div>
              <HiArrowUpCircle />
            </div>
          </IconContext.Provider>
          <p>Обменять</p>
        </li>
        <li className={styles.AppCommandsListItem} onClick={handleClick}>
          <IconContext.Provider value={{ color: "#6AB2F2", size: '27' }}>
            <div>
              <BsCreditCard2BackFill />
            </div>
          </IconContext.Provider>
          <p>Списать</p>
        </li>
      </ul>
    </div>
  )
}

export default Commands