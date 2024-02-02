import React, { useEffect, useState } from "react";
import styles from "./HeaderNewDrop.module.scss";
import Link from "next/link";

const HeaderNewDrop = () => {
  const [audio] = useState(
    new Audio("/computer-keyboard-button-press-release_m1pp3tnd.mp3")
  );

  const playAudio = () => {
    audio.play();
  };

  const stopAudio = () => {
    audio.pause();
    audio.currentTime = 0;
  };

  const handleClick = () => {
    playAudio();
  };

  useEffect(() => {
    audio.addEventListener("ended", stopAudio);
    return () => {
      audio.removeEventListener("ended", stopAudio);
    };
  }, []);
  return (
    <div className={styles.wrapper}>
      <Link href="/" className={styles.button} onClick={handleClick}>
        Home
      </Link>
      <Link href="/" className={styles.button} onClick={handleClick}>
        go to mint
      </Link>
    </div>
  );
};

export default HeaderNewDrop;
