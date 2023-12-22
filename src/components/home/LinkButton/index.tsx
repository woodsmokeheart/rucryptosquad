import React, { useMemo } from "react";
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
        return "About";
      case "contacts":
        return "Contacts";
      case "gallery":
        return "Gallery";
      case "lore":
        return "Lore";
      case "ranks":
        return "Ranks";
      case "team":
        return "Team";
      default:
        return "Custom Tooltip Content";
    }
  }, [classNames]);

  return (
    <Link href={link}>
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
