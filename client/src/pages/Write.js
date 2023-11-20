import React, { useContext, useEffect, useState } from "react";
import classes from "./Write.module.css";
import ComposePage from "../components/UI/ComposePage";
import videoBackground from "../assets/videos/writeBookBackground.mp4";
import Book from "../components/Book";
import Carousel from "../components/UI/Carousel";
import Header from "../components/layout/Header";
import BookInputs from "../components/UI/BookInputs";
import axios from "axios";
import { Context } from "../context/auth-context";
import { useParams } from "react-router-dom";

export default function Write() {
  const [file, setFile] = useState(null);
  const [bookType, setBookType] = useState("");
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [description, setDescription] = useState("");
  const [newColor, setNewColor] = useState(null);
  const [hexColor, setHexColor] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const { user } = useContext(Context);
  const [post, setPost] = useState({});

  const { postId } = useParams();

  const handleColorChange = (e) => {
    const newColor = e.target.value;
    setNewColor({ background: newColor });
    const hexColor = newColor.toUpperCase();
    setHexColor(hexColor);
    console.log(hexColor);
  };

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setSelectedImage(URL.createObjectURL(selectedFile));
  };

  const handleRotateClick = () => {
    setFile(null);
    setNewColor(null);
    setSelectedImage(null);
  };

  // CREATE A POST //

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (postId) {
      handleUpdate();
    } else {
      const newPost = {
        username: user.username,
        color: hexColor,
        bookType,
        title,
        subtitle,
        description,
      };
      if (file) {
        const data = new FormData();
        const filename = Date.now() + file.name;
        data.append("name", filename);
        data.append("file", file);
        newPost.photo = filename;
        try {
          await axios.post("/upload", data);
        } catch (err) {}
      }
      try {
        await axios.post("/posts", newPost);
        window.location.replace("/");
      } catch (err) {}
    }
  };

  // UPDATE POST //

  const handleUpdate = async () => {
    try {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);

      await axios.post("/upload", data);

      await axios.put(`/posts/${post._id}`, {
        username: user.username,
        color: hexColor,
        bookType,
        title,
        subtitle,
        description,
        photo: filename,
      });

      window.location.replace(`/single/${post._id}`);
    } catch (err) {
      console.error("Error updating post:", err);
    }
  };

  useEffect(() => {
    if (postId) {
      const getPost = async () => {
        const res = await axios.get("/posts/" + postId);
        setBookType(res.data.bookType);
        setPost(res.data);
        setTitle(res.data.title);
        setSubtitle(res.data.subtitle);
        setDescription(res.data.description);
        setHexColor(res.data.color);
        setNewColor({ background: res.data.color });
        setFile(res.data.photo);
      };

      getPost();
    }
  }, [postId]);

  return (
    <>
      <Header />
      <div className={classes.container}>
        <video src={videoBackground} autoPlay loop muted />
        <div>
          <div className={classes.carouselContainer}>
            <Carousel
              slide1={
                <ComposePage
                  placeholder={"Once upon a time..."}
                  onTextareaChange={setDescription}
                  descriptionValue={description}
                />
              }
              slide2={
                <Book
                  frontCoverColor={newColor}
                  backCoverColor={newColor}
                  bookInputs={
                    <BookInputs
                      bookTypeValue={bookType}
                      titleValue={title}
                      subtitleValue={subtitle}
                      onColorChange={handleColorChange}
                      onFormSubmit={handleSubmit}
                      onImageChange={handleImageChange}
                      onRotateClick={handleRotateClick}
                      onBookType={setBookType}
                      onTitle={setTitle}
                      onSubtitle={setSubtitle}
                      onTextareaChange={setDescription}
                      file={file}
                      selectedImage={selectedImage}
                    />
                  }
                />
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}
