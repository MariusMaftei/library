import React, { useEffect, useState } from "react";
import homeBackgroundImg from "../assets/images/library.jpg";
import myBooksBackgroundImg from "../assets/images/vintagebooks.jpg";
import classes from "./Home.module.css";
import PageBackCover from "../components/layout/PageBackCover";
import Posts from "../components/Posts";
import Header from "../components/layout/Header";
import Pillar from "../components/UI/Pillar";
import Footer from "../components/layout/Footer";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function Home() {
  const { search, pathname } = useLocation();
  const [posts, setPosts] = useState([]);
  const singleBook = pathname === "/my-books";

  const myBooksPageDescription =
    "Immerse yourself in the joy of rediscovering cherished reads and exploring the vast realms of your bookshelf. Whether you're seeking a thrilling adventure, a heartfelt romance, or a thought-provoking journey, your literary haven awaits.";
  const homePageDescription =
    "Step into a world of knowledge and imagination, where the digital shelves are filled with the treasures of literature, learning, and discovery. Our virtual library is your gateway to a vast collection of books, resources, and interactive experiences.";
  const description = singleBook ? myBooksPageDescription : homePageDescription;
  const backgroundImage = singleBook ? myBooksBackgroundImg : homeBackgroundImg;
  const title = singleBook ? "My Books" : "Library";

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get("/posts" + search);
      setPosts(response.data);
    };
    fetchPosts();
  }, [search]);

  return (
    <div className={classes.container}>
      <Header />
      <PageBackCover
        backgroundImage={backgroundImage}
        description={description}
        title={title}
      />
      <div className={classes.home}>
        <Pillar />
        <Posts posts={posts} />

        <Pillar />
      </div>
      <Footer />
    </div>
  );
}
