import React from 'react'
import styles from "../styles/TopNav.module.css"
import boarderStyles from "../styles/Boarders.module.css"

const TopNav = () => {
    return (
        <nav className={styles.Header}>
            <div className={styles.Logo}><b>Ch<span>eer</span>s<span>²Be</span>ers</b>
            </div>
            <div className={`mr-4 ${styles.TopNavLinkContainer}`}>
                <a className={boarderStyles.NormalBoarder}>About</a>
                <a className={`ml-4 ${boarderStyles.NormalBoarder}`}>Login</a>
            </div>
        </nav>
    )
}

export default TopNav