import React from "react";
import classes from "./ColorInput.module.css";

export default function ColorInput(props) {
  return (
    <div className={classes.colorInput}>
      <input
        id={classes.colorInput}
        type="color"
        onChange={props.onColorChange}
      />
      <p> Select book color</p>
    </div>
  );
}
