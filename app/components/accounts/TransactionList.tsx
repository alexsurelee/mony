import type {LinksFunction} from "@remix-run/node";

import stylesUrl from "app/styles/components/accounts/TransactionList.css";
import type {definitions} from "../../../types/database";

export const links: LinksFunction = () => {
    return [{rel: "stylesheet", href: stylesUrl}];
};

type TransactionListProps = {
    transactions: definitions['transactions'][] | null;
};

export const TransactionList = ({transactions}: TransactionListProps) => {
    if (!transactions) {
        throw new Error("No transactions to display")
    }
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
            {transactions.map((transaction) => {
                const transactionDate = new Date(transaction.transaction_date!);
                const transactionDateString = `${transactionDate.getDate()}/${transactionDate.getMonth()}/${transactionDate.getFullYear()}`;
                return (
                    <tr key={transaction.transaction_id} className="transaction">
                        <td className="transaction--date">{transactionDateString}</td>
                        <td className="transaction--amount">{transaction.amount}</td>
                        <td className="transaction--description">
                            {transaction.description}
                        </td>
                    </tr>
                );
            })}
            </tbody>
        </table>
    );
};

export function ErrorBoundary({error}: { error: Error }): JSX.Element {
    return (<div><h1>Uh oh!</h1>
        <p>We had a problem retrieving your transactions</p>
        <p>Please try again</p>
        <p>{error.message}</p>
        <p>{error.stack}</p>
    </div>)
}