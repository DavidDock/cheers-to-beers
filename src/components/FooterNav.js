import React from 'react'
import styles from "../styles/FooterNav.module.css"
import boarderStyles from "../styles/Boarders.module.css"

const FooterNav = () => {
  return (
    <footer className={`mt-2 ${styles.Footer}`}>
      <div className={`m-2 ${styles.Logo}`}><b>Tha<span>nks</span>⁴Vi<span>sit</span>ing</b>
      </div>
      <div className={styles.FooterNavLinkContainer}>
        <a className={`mr-4 mb-2 ${boarderStyles.NormalBoarder}`}>Contact</a>
        <a className={`mr-4 mb-2 ${boarderStyles.NormalBoarder}`}>Register</a>
      </div>
    </footer>
  )
}

export default FooterNav