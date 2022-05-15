import { AkahuClient } from "akahu";

const appToken = process.env.AKAHU_APP_TOKEN || "";
const userToken = process.env.AKAHU_USER_TOKEN || "";

const akahu = new AkahuClient({ appToken });

export async function getAccounts() {
  const accounts = await akahu.accounts.list(userToken);
  return accounts;
}
