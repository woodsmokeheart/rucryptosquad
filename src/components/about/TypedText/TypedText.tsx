import React, { useEffect } from "react";
import Typed from "typed.js";
import aboutUsText from "../mock/aboutUsText";
import styles from "./TypedText.module.scss";

const TypedText = () => {
  useEffect(() => {
    const options = {
      strings: [aboutUsText],
      typeSpeed: 0,
      showCursor: false,
      startDelay: 0,
    };

    const typed = new Typed(".about-us-text", options);

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className={styles.wrapper}>
      <div className="about-us-text" />
    </div>
  );
};

export default TypedText;
