import React from "react";
import styles from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <div data-glitch="Welcome to Ethereon" className={styles.glitch}>
        Welcome to Ethereon
      </div>
    </div>
  );
};

export default Loader;
