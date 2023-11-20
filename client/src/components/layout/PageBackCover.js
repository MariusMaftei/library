import classes from "./PageBackCover.module.css";

export default function PageBackCover(props) {
  return (
    <div className={classes.container}>
      <span className={classes.title}>{props.title}</span>
      <span className={classes.description}>{props.description}</span>
      <img src={props.backgroundImage} alt="img" />
    </div>
  );
}
