import React from 'react';
import { NavLink } from "react-router-dom";
import axios from "axios";

import styles from "../styles/FooterNav.module.css";
import borderStyles from "../styles/Borders.module.css";

import Logo from "./Logo";
import { removeTokenTimestamp } from "../utils/utils";

import { useCurrentUser, useSetCurrentUser } from "../contexts/CurrentUserContext";

const FooterNav = () => {
  // Use context to get current user data
  // Functionality to log out
  // Display relevant NavLinks depending on logged in status
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
      removeTokenTimestamp();
    } catch (err) {
      //console.log(err);
    }
  };

  const loggedInIcons = (
    <>
      <NavLink
        exact
        className={`mr-4 mt-2 ${borderStyles.NormalBorder}`}
        activeClassName={borderStyles.Active}
        to="/contact"
      >
        Contact
      </NavLink>
      <NavLink
        exact
        className={`mr-4 mt-2 ${borderStyles.NormalBorder}`}
        onClick={handleSignOut}
        to="/"
      >
        Logout
      </NavLink>
    </>
  );
  const loggedOutIcons = (
    <>
      <NavLink
        exact
        className={`mr-4 mt-2 ${borderStyles.NormalBorder}`}
        activeClassName={borderStyles.Active}
        to="/signup"
      >
        Register
      </NavLink>
    </>
  );

  return (
    <footer className={`mt-2 ${styles.Footer}`}>
      <Logo aria="Thanks For Visiting Logo" one="Tha" two="nks" three="⁴Vi" four="²sit" five="ing" />
      <div className={styles.FooterNavLinkContainer}>
        {currentUser ? loggedInIcons : loggedOutIcons}
      </div>
    </footer>
  )
}

export default FooterNav