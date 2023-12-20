import React from "react";
import Link from "next/link";

import cn from "classnames";
import styles from "./LinkButton.module.scss";

interface LinkButtonProps {
  link: string;
  classNames: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ link, classNames }) => {
  return (
    <Link href={link}>
      <div className={cn("button", styles[classNames])}>
        <div className={styles.central_shadow}>
          <div className={styles.core} />
        </div>
      </div>
    </Link>
  );
};

export default LinkButton;
