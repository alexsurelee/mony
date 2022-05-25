import { AkahuClient } from "akahu";

const appToken = process.env.AKAHU_APP_TOKEN || "";
const userToken = process.env.AKAHU_USER_TOKEN || "";

const akahu = new AkahuClient({ appToken });

export const getAccounts = () => akahu.accounts.list(userToken);

export const getAccount = (accountId: string) =>
  akahu.accounts.get(userToken, accountId);

export const listTransactions = (accountId: string) =>
  akahu.accounts.listTransactions(userToken, accountId);
