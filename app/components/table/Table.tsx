import classNames from "classnames";

export interface TableProps {
  className?: string;
  children: React.ReactChild;
}

export function Table(props: TableProps) {
  const { className, children } = props;
  return <table className={classNames("table", className)}>{children}</table>;
}
