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
        return "Пора нам познакомиться поближе. Узнай все о DAO RCS.";
      case "contacts":
        return "Есть вопросы? Мы ответим!";
      case "gallery":
        return "Посмотри нашими глазами на Эфирион";
      case "lore":
        return "Окунись в удивительный мир Эфириона!";
      case "ranks":
        return "В Эфирионе каждый получает по заслугам. Ранги";
      case "team":
        return "Познакомься с создателями. Команда";
      default:
        return "Эфирион";
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
