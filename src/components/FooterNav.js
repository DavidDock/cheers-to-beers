import React from 'react';
import styles from "../styles/FooterNav.module.css";
import boarderStyles from "../styles/Boarders.module.css";
import { NavLink } from "react-router-dom";
import { useCurrentUser } from "../contexts/CurrentUserContext";

const FooterNav = () => {

  const currentUser = useCurrentUser();

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
                activeClassName={boarderStyles.Active}
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