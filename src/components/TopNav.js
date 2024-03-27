import React from 'react'
import styles from "../styles/TopNav.module.css"
import boarderStyles from "../styles/Boarders.module.css"

const TopNav = () => {
    return (
    <nav className={`my-2 ${styles.Header}`}>
            <div className={`m-2 ${styles.Logo}`}><b>Ch<span>eer</span>s<span>²Be</span>ers</b>
            </div>
            <div className={styles.TopNavLinkContainer}>
                <a className={`mr-4 my-2 ${boarderStyles.NormalBoarder}`}>About</a>
                <a className={`mr-4 my-2 ${boarderStyles.NormalBoarder}`}>Login</a>
            </div>
        </nav>
    )
}

export default TopNav