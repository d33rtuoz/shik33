import { ReactNode } from "react";

import classes from "./List.module.css";

const List = ({ children }: { children: ReactNode }) => {
  return <div className={classes.List}>{children}</div>;
};

export default List;
