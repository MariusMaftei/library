import React, { Fragment, useContext, useRef } from "react";
import classes from "./Login.module.css";
import Header from "../components/layout/Header";
import videoBackground from "../assets/videos/registervideobg.mp4";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/layout/Footer";
import { Context } from "../context/auth-context";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const response = await axios.post("/auth/login", {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
      navigate("/");
      window.location.reload();
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
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
      <div className={classes.login}>
        <a href=""></a>
        <h1>Login</h1>
        <form onSubmit={handleSubmit} className={classes.formControl}>
          <label>Email</label>
          <input ref={emailRef} type="text" placeholder="Enter your email..." />
          <label>Password</label>
          <input
            ref={passwordRef}
            type="password"
            placeholder="Enter your password..."
          />
          <button
            type="submit"
            className={classes.loginButton}
            disabled={isFetching}
          >
            Login
          </button>
          <Link to={"/register"} className={classes.redirectButton}>
            Don't have an account? Register
          </Link>
        </form>
      </div>
      <Footer />
    </Fragment>
  );
}
