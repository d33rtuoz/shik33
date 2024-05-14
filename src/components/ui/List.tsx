import { ReactNode } from "react";

import classes from "./List.module.css";

const List = ({ children }: { children: ReactNode }) => {
  return <ul className={classes.list}>{children}</ul>;
};

export default List;
