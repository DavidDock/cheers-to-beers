import React from 'react';
import styles from "../styles/SideNav.module.css";
import boarderStyles from "../styles/Boarders.module.css";
import logo from "../assets/beer-cheers.png";
import { NavLink } from "react-router-dom";
import { useCurrentUser } from "../contexts/CurrentUserContext";

const SideNav = () => {

  const currentUser = useCurrentUser();

    const loggedInIcons = (
      <div className={styles.List}>
      <h1 className={`my-2 mx-2 text-center ${styles.GreenTitle}`}>Posts</h1>
      <a className={`my-2 mx-2 text-center ${boarderStyles.RedBoarder}`}>ADD</a>
      <NavLink
        exact
        className={`my-2 mx-2 text-center ${boarderStyles.NormalBoarder}`}
        activeClassName={boarderStyles.Active}
        to="/"
      >
        All
      </NavLink>
      <a className={`my-2 mx-2 text-center ${boarderStyles.NormalBoarder}`}>STARRED</a>
      <a className={`my-2 mx-2 text-center ${boarderStyles.NormalBoarder}`}>FRIENDS</a>
      <a className={`my-2 mx-2 text-center ${boarderStyles.NormalBoarder}`}>YOURS</a>
    </div>
    );
    const loggedOutIcons = (
      <div className={styles.List}>
      <img className={`mx-auto mt-2 ${styles.Image}`} src={logo} alt="Beer Glass" height="35" width="35"></img>
      <NavLink
        exact
        className={`my-2 mx-2 text-center ${boarderStyles.NormalBoarder}`}
        activeClassName={boarderStyles.Active}
        to="about"
      >
        About
      </NavLink>
      <NavLink
        exact
        className={`my-2 mx-2 text-center ${boarderStyles.NormalBoarder}`}
        activeClassName={boarderStyles.Active}
        to="contact"
      >
        Contact
      </NavLink>
      <img className={`mx-auto mb-2 ${styles.Image}`} src={logo} alt="Beer Glass" height="35" width="35"></img>
    </div>
    );


  return (
    <div className={styles.SideContainer}>
      <div className={`${styles.Side} ${boarderStyles.LargeRedBoarder}`}>
      {currentUser ? loggedInIcons : loggedOutIcons}
      </div>

    </div>
  )
}

export default SideNav