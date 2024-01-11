import React from 'react';
import styles from './Transactions.module.css'
import { ITransaction } from '../../Interfaces';

interface ITransactionProps {
  transactions: ITransaction[] 
}

const Transactions = ({transactions}: ITransactionProps) => {
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
          {transactions.map((item, index) => (
            <tr key={index}>
              <td>{item.time.replace("T", " ").replace("Z", "")}</td>
              <td>{item.amount_nano / 1000000000}</td>
              <td>{item.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Transactions