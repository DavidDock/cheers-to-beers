import React from 'react'
import styles from "../styles/SideNav.module.css"
import boarderStyles from "../styles/Boarders.module.css"

const SideNav = () => {
  return (
    <div className={styles.SideContainer}>
      <div className={`${styles.Side} ${boarderStyles.LargeRedBoarder}`}>
        <div className={styles.List}>
          <h1 className={`my-2 mx-2 text-center ${styles.GreenTitle}`}>Posts</h1>
          <a className={`my-2 mx-2 text-center ${boarderStyles.RedBoarder}`}>ADD</a>
          <a className={`my-2 mx-2 text-center ${boarderStyles.NormalBoarder}`}>ALL</a>
          <a className={`my-2 mx-2 text-center ${boarderStyles.NormalBoarder}`}>STARRED</a>
          <a className={`my-2 mx-2 text-center ${boarderStyles.NormalBoarder}`}>FRIENDS</a>
          <a className={`my-2 mx-2 text-center ${boarderStyles.NormalBoarder}`}>YOURS</a>
        </div>
      </div>

    </div>
  )
}

export default SideNav