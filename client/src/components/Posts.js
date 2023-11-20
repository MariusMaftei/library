import { Link } from "react-router-dom";
import Book from "./Book";
import classes from "./Posts.module.css";

export default function Posts({ posts }) {
  const PF = "http://localhost:5000/images/";

  return (
    <div className={classes.wrap}>
      {posts.map((data) => (
        <Link to={`/single/${data._id}`} key={data._id}>
          <Book
            bookType={data.bookType}
            title={data.title}
            subtitle={data.subtitle}
            writtenBy={"Written by "}
            author={data.username}
            frontCoverColor={{ background: data.color }}
            backCoverColor={{ background: data.color }}
            coverImage={
              data.photo ? <img src={PF + data.photo} alt="img" /> : null
            }
          />
        </Link>
      ))}
    </div>
  );
}
