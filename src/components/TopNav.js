import React from "react";
import { NavLink } from "react-router-dom";

import styles from "../styles/TopNav.module.css";
import borderStyles from "../styles/Borders.module.css";

import { useCurrentUser } from "../contexts/CurrentUserContext";
import Avatar from "./Avatar";
import Logo from "./Logo";

const TopNav = () => {
    // Use context to get current user data
    // Display relevant NavLinks depending on logged in status
    // Display Avatar giving relevant props
    const currentUser = useCurrentUser();

    const loggedInIcons = (
        <>
            <NavLink
                exact
                className={`mr-4 mt-2 ${borderStyles.NormalBorder}`}
                activeClassName={borderStyles.Active}
                to="/about"
            >
                About
            </NavLink>
            <NavLink
                exact
                className={`mr-4 mt-2 ${borderStyles.NormalBorder}`}
                activeClassName={borderStyles.Active}
                to={`/profiles/${currentUser?.profile_id}`}
            >
                <Avatar src={currentUser?.profile_image} text="Profile" height={35} />
            </NavLink>
        </>
    );
    const loggedOutIcons = (
        <>
            <NavLink
                exact
                className={`mr-4 mt-2 ${borderStyles.NormalBorder}`}
                activeClassName={borderStyles.Active}
                to="/signin"
            >
                Login
            </NavLink>
        </>
    );

    return (
        <nav className={`my-2 ${styles.Header}`}>
            <NavLink to="/">
                <Logo aria="Cheers To Beers Logo" one="Ch" two="eer" three="s" four="²Be" five="ers" />
            </NavLink>
            <div className={styles.TopNavLinkContainer}>
                {currentUser ? loggedInIcons : loggedOutIcons}
            </div>
        </nav>
    )
}

export default TopNav