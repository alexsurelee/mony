export interface AccountPanelProps {
  name: string;
  balance: number;
}

export function AccountPanel({ name, balance }: AccountPanelProps) {
  const formatter = Intl.NumberFormat("en-NZ", {
    style: "currency",
    currency: "NZD",
  });
  return (
    <div className="account-panel">
      <div className="account-panel--name">{name}</div>
      <div className="account-panel--balance">{formatter.format(balance)}</div>
    </div>
  );
}
