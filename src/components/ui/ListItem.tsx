import { ReactNode } from "react";

const ListItem = ({ key, children }: { key: string; children: ReactNode }) => {
  return <li key={key}>{children}</li>;
};

export default ListItem;
