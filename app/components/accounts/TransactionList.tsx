import type { LinksFunction } from "@remix-run/node";
import type { Paginated, Transaction } from "akahu";

import stylesUrl from "app/styles/components/accounts/TransactionList.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

type TransactionListProps = {
  transactions: Paginated<Transaction>;
};

export const TransactionList = ({ transactions }: TransactionListProps) => {
  return (
    <table className="transaction-list">
      <thead>
        <tr>
          <th>Date</th>
          <th>Amount</th>
          <th>Description</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {transactions.items.map((transaction) => {
          const transactionDate = new Date(transaction.date);
          const transactionDateString = `${transactionDate.getDate()}/${transactionDate.getMonth()}/${transactionDate.getFullYear()}`;
          return (
            <tr key={transaction._id} className="transaction">
              <td className="transaction--date">{transactionDateString}</td>
              <td className="transaction--amount">{transaction.amount}</td>
              <td className="transaction--description">
                {transaction.description}
              </td>
              <td className="transaction--type">{transaction.type}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
