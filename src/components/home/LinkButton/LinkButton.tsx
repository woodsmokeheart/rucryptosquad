import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";

import cn from "classnames";
import styles from "./LinkButton.module.scss";

interface LinkButtonProps {
  link: string;
  position: string;
  classNames: string;
  appear?: boolean;
}

const LinkButton: React.FC<LinkButtonProps> = ({
  link,
  position,
  classNames,
  appear,
}) => {
  const tooltipContent = useMemo(() => {
    switch (classNames) {
      case "about":
        return "Welcome to Ethereum! Find out all about our DAO.";
      case "gallery":
        return "A gallery of our best moments.";
      case "lore":
        return "Find out the history of Ethereum.";
      case "ranks":
        return "The ranking system in the community.";
      default:
        return "Ethereum";
    }
  }, [classNames]);

  const [audio] = useState(new Audio("/korotkiy.mp3"));

  const playAudio = () => {
    audio.play();
  };

  const stopAudio = () => {
    audio.pause();
    audio.currentTime = 0;
  };

  const handleMouseEnter = () => {
    playAudio();
  };

  const handleMouseLeave = () => {
    stopAudio();
  };

  useEffect(() => {
    audio.addEventListener("ended", stopAudio);
    return () => {
      audio.removeEventListener("ended", stopAudio);
    };
  }, []);

  return (
    <Link
      href={link}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles[position]}>
        <div
          className={cn("button", styles[classNames], appear && styles.appear)}
        >
          <div className={styles.central_shadow}>
            <div className={styles.core} />
          </div>
        </div>
        <div className={styles.tooltip}>{tooltipContent}</div>
      </div>
    </Link>
  );
};

export default LinkButton;
