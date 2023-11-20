import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRotateRight, faImage } from "@fortawesome/free-solid-svg-icons";
import classes from "./BookInputs.module.css";
import ColorInput from "./ColorInput";
import Button from "./Button";

export default function BookInputs(props) {
  const isEditMode = window.location.pathname === "/edit";
  const buttonText = isEditMode ? "Update" : "Submit";
  return (
    <form onSubmit={props.onFormSubmit}>
      <div className={classes.container}>
        <input
          onChange={(e) => props.onBookType(e.target.value)}
          maxLength={15}
          type="text"
          placeholder="Book type...(ex. POEM)"
          required
          value={props.bookTypeValue}
        />
        <input
          onChange={(e) => props.onTitle(e.target.value)}
          maxLength={20}
          type="text"
          placeholder="Book Title...(ex.Divine Comedy)"
          required
          value={props.titleValue}
        />
        <input
          onChange={(e) => props.onSubtitle(e.target.value)}
          maxLength={20}
          type="text"
          placeholder="Book subtitle...(ex. INFERNO)"
          required
          value={props.subtitleValue}
        />
      </div>
      <div className={classes.imageInput}>
        {!props.selectedImage && (
          <div className={classes.defaultIcon}>
            <label htmlFor="inputImage">
              <FontAwesomeIcon icon={faImage} />
            </label>
          </div>
        )}
        <input
          id="inputImage"
          type="file"
          accept="image/*"
          onChange={props.onImageChange}
          value={props.colorValue}
        />
        {props.selectedImage && (
          <div className={classes.selectedImage}>
            {props.file && (
              <img src={URL.createObjectURL(props.file)} alt="Selected" />
            )}
            <FontAwesomeIcon
              icon={faArrowRotateRight}
              onClick={props.onRotateClick}
            />
          </div>
        )}
      </div>
      <div className={classes.colorInputs}>
        <ColorInput
          onColorChange={props.onColorChange}
          colorValue={props.color}
        />
      </div>
      <div className={classes.submitBtn}>
        <Button style={{ background: "#838383" }} text={buttonText} />
      </div>
    </form>
  );
}
