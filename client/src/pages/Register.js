import React, { Fragment, useState } from "react";
import classes from "./Register.module.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import videoBackground from "../assets/videos/registervideobg.mp4";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const response = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      response.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };

  return (
    <Fragment>
      <Header />
      <div className={classes.videoContainer}>
        <video
          className={classes.video}
          src={videoBackground}
          autoPlay
          loop
          muted
        />
        <div className={classes.overlay}></div>
      </div>
      <div className={classes.register}>
        <h1>Register</h1>
        <form onSubmit={handleSubmit} className={classes.formControl}>
          <label>Username</label>
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username..."
          />
          <label>Email</label>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email..."
          />
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password..."
          />
          <label>Confirm Password</label>
          <input type="password" placeholder="Repeat your password..." />
          <button type="submit" className={classes.registerButton}>
            Register
          </button>
          {error && <span>Something went wrong!</span>}
          <Link to={"/login"} className={classes.redirectButton}>
            Already have an account? Login
          </Link>
        </form>
      </div>
      <Footer />
    </Fragment>
  );
}
