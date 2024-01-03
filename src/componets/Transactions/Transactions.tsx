import React from 'react';
import styles from './Transactions.module.css'

interface History {
  date: string;
  quantity: string;
  type: string;
}
  
interface HistoryProps {
  HistoryList: History[];
}

const Transactions = ({HistoryList}: HistoryProps) => {
  return (
    <div className={styles.TransactionsContainer}>
      <p>Список транзакций </p>
      <table>
        <thead>
          <tr>
            <th>Дата</th>
            <th>Количество</th>
            <th>Тип</th>
          </tr>
        </thead>
        <tbody>
          {HistoryList.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.quantity}</td>
              <td>{item.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Transactions