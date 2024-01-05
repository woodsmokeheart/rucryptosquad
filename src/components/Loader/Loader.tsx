import React from "react";
import styles from "./Loader.module.scss";

interface LoaderProps {
  title: string;
  glitch: string;
  onClose?: () => void;
}

const Loader: React.FC<LoaderProps> = ({ title, glitch, onClose }) => {
  return (
    <div className={styles.loader}>
      <div data-glitch={glitch} className={styles.glitch}>
        {title}
      </div>
      <button onClick={onClose} className={styles.buttonClose}>
        go to world
      </button>
    </div>
  );
};

export default Loader;
