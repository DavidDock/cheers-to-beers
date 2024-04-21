import React from "react";

import styles from "../styles/Logo.module.css";

const Logo = ({ aria, one, two, three, four, five }) => {
  return (
      <div className={`m-2 ${styles.Logo}`} aria-label={aria}><b>{one}<span>{two}</span>{three}<span>{four}</span>{five}</b>
      </div>
  );
};

export default Logo;