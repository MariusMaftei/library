import React from "react";
import pillarImage from "../../assets/images/pillar.png";
import classes from "./Pillar.module.css";
import pillarBottom from "../../assets/images/pillarbot.png";

export default function Pillar() {
  return (
    <div className={classes.container}>
      <img src={pillarImage} alt="img" />
      <div className={classes.pillar}>
        <div className={classes.firstVerticalLine}>
          <div className={classes.secondVerticalLine}>
            <div className={classes.thirdVerticalLine}></div>
          </div>
        </div>
      </div>
      <img src={pillarBottom} alt="img" />
    </div>
  );
}
