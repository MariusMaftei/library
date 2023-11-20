import React from "react";
import { useLocation } from "react-router-dom";
import classes from "./Book.module.css";

export default function Book(props) {
  const location = useLocation();
  const isPostRoute =
    location.pathname === "/" || location.pathname === "/my-books";
  const isSingleBookRoute = location.pathname.startsWith("/single/");
  const containerClassName = isSingleBookRoute
    ? classes.singleBook
    : isPostRoute
    ? classes.book
    : classes.closedBook;

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <ul>
          <li>
            <div className={containerClassName}>
              <ul className={classes.front}>
                <li>
                  <div className={classes.bookCoverInfo}>
                    <div className={classes.coverImage}>{props.coverImage}</div>
                    <div className={classes.writeBookInputs}>
                      {props.bookInputs}
                    </div>
                    <div className={classes.bookType}>{props.bookType}</div>
                    <div className={classes.title}>{props.title}</div>
                    <div className={classes.subTitle}>{props.subtitle}</div>
                    <div className={classes.author}>
                      <i>{props.writtenBy}</i> {props.author}
                    </div>
                    <div className={classes.customInputs}>
                      <div className={classes.imageInput}>
                        {props.imageInput}
                      </div>
                      <div className={classes.colorInput}>
                        {props.colorInput}
                      </div>
                    </div>
                    <div className={classes.date}>{props.date}</div>
                  </div>
                  <div
                    style={props.frontCoverColor}
                    className={classes.frontCover}
                  ></div>
                </li>
                <li></li>
              </ul>
              <ul className={classes.page}>
                <li></li>
                <li>
                  <div className={classes.pageText}>
                    <p>{props.description}</p>
                  </div>
                </li>
                <li>
                  <p></p>
                </li>
                <li></li>
                <li></li>
              </ul>
              <ul style={props.backCoverColor} className={classes.back}>
                <li></li>
                <li></li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
