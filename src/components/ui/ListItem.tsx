import { ReactNode } from "react";

const ListItem = ({ children }: { key: string; children: ReactNode }) => {
  return <li>{children}</li>;
};

export default ListItem;
