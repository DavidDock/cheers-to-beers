import React from 'react';
import styles from "../styles/FooterNav.module.css";
import boarderStyles from "../styles/Boarders.module.css";
import { NavLink } from "react-router-dom";
import { useCurrentUser, useSetCurrentUser } from "../contexts/CurrentUserContext";
import axios from "axios";

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
        } catch (err) {
          console.log(err);
        }
      };

    const loggedInIcons = (
        <>
            <NavLink
                exact
                className={`mr-4 mt-2 ${boarderStyles.NormalBoarder}`}
                activeClassName={boarderStyles.Active}
                to="/contact"
            >
                Contact
            </NavLink>
            <NavLink
                exact
                className={`mr-4 mt-2 ${boarderStyles.NormalBoarder}`}
                onClick ={handleSignOut}
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
                className={`mr-4 mt-2 ${boarderStyles.NormalBoarder}`}
                activeClassName={boarderStyles.Active}
                to="/signup"
            >
                Register
            </NavLink>
        </>
    );
  
  return (
    <footer className={`mt-2 ${styles.Footer}`}>
      <div className={`m-2 ${styles.Logo}`} aria-label='Thanks For Visiting Logo'><b>Tha<span>nks</span>⁴Vi<span>sit</span>ing</b>
      </div>
      <div className={styles.FooterNavLinkContainer}>
      {currentUser ? loggedInIcons : loggedOutIcons}
      </div>
    </footer>
  )
}

export default FooterNav