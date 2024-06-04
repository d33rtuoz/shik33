import { ReactNode } from "react";
import classes from "./ListItem.module.css";

const ListItem = ({ url, children }: { url: string; children: ReactNode }) => {
  return (
    <a href={url} className={classes.ListItemLink}>
      <div className={classes.ListItem}>{children}</div>
    </a>
  );
};

export default ListItem;
