import React, { useContext, useState } from "react";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/librarylogo.png";
import { Context } from "../../context/auth-context";

export default function Header() {
  const { user, dispatch } = useContext(Context);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const activeMenu = `${menuOpen ? classes.activeMenu : ""}`;
  const activeList = `${menuOpen ? classes.activeList : ""}`;
  const hamburgerWrapper = `${classes.hamburgerWrapper} ${
    menuOpen ? classes.active : ""
  }`;

  return (
    <header className={activeMenu}>
      <div className={classes.navigationLinks}>
        <div className={classes.firstList}>
          <Link to={"/"}>
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className={classes.secondList}>
          <ul className={activeList}>
            <li>
              <Link to={"/"}>Library</Link>
            </li>
            <li>
              <Link to={`/my-books?user=${user?.username}`}>My Books</Link>
            </li>
            <li>
              <Link to={"/write"}>Write</Link>
            </li>
          </ul>
        </div>

        <div className={classes.thirdList}>
          <ul>
            {!user && (
              <li>
                <Link to={"/login"}>Login</Link>
              </li>
            )}
            {user && (
              <li>
                {" "}
                <Link to={"/login"} onClick={handleLogout}>
                  Logout{" "}
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className={hamburgerWrapper} onClick={toggleMenu}>
        <div className={classes.hamburgerIcon}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}
