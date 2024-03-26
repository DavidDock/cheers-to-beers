import React from 'react'
import styles from "../styles/TopNav.module.css"
import boarderStyles from "../styles/Boarders.module.css"

const TopNav = () => {
    return (
        <nav className={styles.Header}>
            <div className={styles.Logo}><b>Ch<span>eer</span>s<span>²Be</span>ers</b>
            </div>
            <div className={styles.TopNavLinkContainer}>
                <a className={`mr-3 ${boarderStyles.NormalBoarder}`}>About</a>
                <a className={`mr-3 ${boarderStyles.NormalBoarder}`}>Login</a>
            </div>
        </nav>
    )
}

export default TopNav