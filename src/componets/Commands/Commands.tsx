import React from 'react';
import styles from './Commands.module.css'
import { HiArrowUpCircle } from "react-icons/hi2";
import { HiArrowDownCircle } from "react-icons/hi2";
import { BsCreditCard2BackFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import { Link } from 'react-router-dom';
import { ICoinProps } from '../../Interfaces';

const Commands = ({coins}: ICoinProps) => {
  return (
    <div className={styles.AppCommands}>
      <ul className={styles.AppCommandsList}>
        <Link to={'/send'} state={coins} className={styles.AppCommandsLink}>
          <li className={styles.AppCommandsListItem}>
            <IconContext.Provider value={{ color: "#6AB2F2", size: '27' }}>
              <div>
                <HiArrowUpCircle />
              </div>
            </IconContext.Provider>
            <p className={styles.CommandText}>Отправить</p>
          </li>
        </Link>
        <Link to={'/get'} state={coins} className={styles.AppCommandsLink}>
          <li className={styles.AppCommandsListItem}>
            <IconContext.Provider value={{ color: "#6AB2F2", size: '27' }}>
              <div>
                <HiArrowDownCircle />
              </div>
            </IconContext.Provider>
            <p className={styles.CommandText}>Получить</p>
          </li>
        </Link>
        <Link to={'/exchange'} state={coins} className={styles.AppCommandsLink}>
          <li className={styles.AppCommandsListItem}>
            <IconContext.Provider value={{ color: "#6AB2F2", size: '27' }}>
              <div>
                <HiArrowUpCircle />
              </div>
            </IconContext.Provider>
            <p className={styles.CommandText}>Обменять</p>
          </li>
        </Link>
        <Link to={'/writeoff'} state={coins} className={styles.AppCommandsLink}>
          <li className={styles.AppCommandsListItem}>
            <IconContext.Provider value={{ color: "#6AB2F2", size: '27' }}>
              <div>
                <BsCreditCard2BackFill />
              </div>
            </IconContext.Provider>
            <p className={styles.CommandText}>Списать</p>
          </li>
        </Link>
      </ul>
    </div>
  )
}

export default Commands