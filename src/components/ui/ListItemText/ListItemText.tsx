import classes from "./ListItemText.module.css";

const ListItemText = ({ text }: { text: string | null | undefined }) => {
  return <p className={classes.ListItemText}>{text ?? "anime name"}</p>;
};

export default ListItemText;
