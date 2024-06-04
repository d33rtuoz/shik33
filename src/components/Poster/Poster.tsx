import classes from "./Poster.module.css";

type Params = {
  url: string | undefined;
  alt: string | null | undefined;
};

const Poster = ({ url, alt }: Params) => {
  return <img alt={alt ?? "anime"} src={url} className={classes.poster} />;
};

export default Poster;
