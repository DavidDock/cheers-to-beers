import React from 'react';
import { NavLink } from "react-router-dom";

import styles from "../styles/SideNav.module.css";
import borderStyles from "../styles/Borders.module.css";

import logo from "../assets/beer-cheers.png";
import { useCurrentUser } from "../contexts/CurrentUserContext";

const SideNav = () => {
  // Use context to get current user data
  // Display relevant NavLinks depending on logged in status
  const currentUser = useCurrentUser();

    const loggedInIcons = (
      <div className={styles.List}>
      <h1 className={`my-2 mx-2 text-center ${styles.GreenTitle}`}>Posts</h1>
      <NavLink
        exact
        className={`my-2 mx-2 text-center ${borderStyles.RedBorder}`}
        activeClassName={borderStyles.Active}
        to="/posts/create"
      >
        ADD
      </NavLink>
      <NavLink
        exact
        className={`my-2 mx-2 text-center ${borderStyles.NormalBorder}`}
        activeClassName={borderStyles.Active}
        to="/"
      >
        All
      </NavLink>
      <NavLink
        exact
        className={`my-2 mx-2 text-center ${borderStyles.NormalBorder}`}
        activeClassName={borderStyles.Active}
        to="contact"
      >
        STARED
      </NavLink>
      <NavLink
        exact
        className={`my-2 mx-2 text-center ${borderStyles.NormalBorder}`}
        activeClassName={borderStyles.Active}
        to="contact"
      >
        FRIENDS
      </NavLink>
      <NavLink
        exact
        className={`my-2 mx-2 text-center ${borderStyles.NormalBorder}`}
        activeClassName={borderStyles.Active}
        to="contact"
      >
        YOURS
      </NavLink>
    </div>
    );
    const loggedOutIcons = (
      <div className={styles.List}>
      <img className={`mx-auto mt-2 ${styles.Image}`} src={logo} alt="Beer Glass" height="35" width="35"></img>
      <NavLink
        exact
        className={`my-2 mx-2 text-center ${borderStyles.NormalBorder}`}
        activeClassName={borderStyles.Active}
        to="about"
      >
        About
      </NavLink>
      <NavLink
        exact
        className={`my-2 mx-2 text-center ${borderStyles.NormalBorder}`}
        activeClassName={borderStyles.Active}
        to="contact"
      >
        Contact
      </NavLink>
      <img className={`mx-auto mb-2 ${styles.Image}`} src={logo} alt="Beer Glass" height="35" width="35"></img>
    </div>
    );


  return (
    <div className={styles.SideContainer}>
      <div className={`${styles.Side} ${borderStyles.LargeRedBorder}`}>
      {currentUser ? loggedInIcons : loggedOutIcons}
      </div>

    </div>
  )
}

export default SideNav