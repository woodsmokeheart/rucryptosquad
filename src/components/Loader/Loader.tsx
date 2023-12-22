import React from "react";
import styles from "./Loader.module.scss";

interface LoaderProps {
  title: string;
  glitch: string;
}

const Loader: React.FC<LoaderProps> = ({ title, glitch }) => {
  return (
    <div className={styles.loader}>
      <div data-glitch={glitch} className={styles.glitch}>
        {title}
      </div>
    </div>
  );
};

export default Loader;
