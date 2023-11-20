import React from "react";
import classes from "./Button.module.css";

export default function Button(props) {
  return (
    <div className={classes.button}>
      <button style={props.style}>{props.text}</button>
    </div>
  );
}
