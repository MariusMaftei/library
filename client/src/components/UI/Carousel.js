import React from "react";
import classes from "./Carousel.module.css";

export default function Carousel(props) {
  return (
    <div className={classes.carousel}>
      <div className={classes.sliderWrapper}>
        <div className={classes.slider}>
          <div className={classes.slide1} id="slide1">
            {props.slide1}
          </div>
          <div id="slide2">{props.slide2}</div>
        </div>
        <div className={classes.sliderNav}>
          <a href={"#slide1"}>Previous</a>
          <a href={"#slide2"}>Next</a>
        </div>
      </div>
    </div>
  );
}
