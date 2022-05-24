import { AkahuClient } from "akahu";

const appToken = process.env.AKAHU_APP_TOKEN || "";
const userToken = process.env.AKAHU_USER_TOKEN || "";

const akahu = new AkahuClient({ appToken });

export async function getAccounts() {
  const accounts = await akahu.accounts.list(userToken);
  return accounts;
}

export async function getAccount(accountId: string) {
  const account = await akahu.accounts.get(userToken, accountId);
  return account;
}

export async function listTransactions(accountId: string) {
  const transactions = await akahu.accounts.listTransactions(
    userToken,
    accountId
  );
  return transactions;
}
