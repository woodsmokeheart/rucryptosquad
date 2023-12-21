import React from "react";
import Link from "next/link";

import cn from "classnames";
import styles from "./LinkButton.module.scss";

interface LinkButtonProps {
  link: string;
  appear?: boolean;
  classNames: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({
  link,
  appear,
  classNames,
}) => {
  return (
    <Link href={link}>
      <div
        className={cn("button", styles[classNames], appear && styles.appear)}
      >
        <div className={styles.central_shadow}>
          <div className={styles.core} />
        </div>
      </div>
    </Link>
  );
};

export default LinkButton;
