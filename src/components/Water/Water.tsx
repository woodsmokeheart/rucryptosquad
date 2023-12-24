import React from "react";
import styles from "./Water.module.scss";

interface WaterProps {
  onClick?: () => void;
}

const Water: React.FC<WaterProps> = ({ onClick }) => {
  return (
    <section className={styles.wrapper} onClick={onClick}>
      <div className={styles.water}></div>
    </section>
  );
};

export default Water;
