import React, { useContext, useEffect, useState } from "react";
import classes from "./SinglePost.module.css";
import { Link, useLocation } from "react-router-dom";
import Book from "../components/Book";
import axios from "axios";
import { Context } from "../context/auth-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePen, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const PF = "http://localhost:5000/images/";
  const { user } = useContext(Context);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this post?"
    );

    if (confirmed) {
      try {
        await axios.delete(`/posts/${post._id}`, {
          data: { username: user.username },
        });
        window.location.replace("/");
      } catch (err) {
        console.error("Error deleting post:", err);
      }
    }
  };
  return (
    <div>
      {post && (
        <Book
          bookType={post.bookType}
          title={post.title}
          subtitle={post.subtitle}
          description={post.description}
          writtenBy={"Written by "}
          author={post.username}
          frontCoverColor={{ background: post.color }}
          backCoverColor={{ background: post.color }}
          coverImage={
            post.photo ? <img src={PF + post.photo} alt="img" /> : null
          }
        />
      )}
      {post.username === user?.username && (
        <div className={classes.editSection}>
          <Link to={`/edit/${post._id}`}>
            <FontAwesomeIcon icon={faFilePen} />
          </Link>
          <FontAwesomeIcon icon={faTrash} onClick={handleDelete} />
        </div>
      )}
    </div>
  );
}
