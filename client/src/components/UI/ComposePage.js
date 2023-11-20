import React from "react";
import classes from "./ComposePage.module.css";

export default function ComposePage(props) {
  return (
    <div className={classes.container}>
      <div className={classes.firstPage}>
        <div className={classes.secondPage}>
          <div className={classes.thirdPage}>
            <textarea
              maxLength={600}
              placeholder={props.placeholder}
              onChange={(e) => props.onTextareaChange(e.target.value)}
              value={props.descriptionValue}
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}
