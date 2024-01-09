import React, { useMemo } from "react";
import cn from "classnames";
import styles from "./Card.module.scss";

interface ICard {
  id: string;
  title: string;
  description: string;
  url?: string;
}

interface ICardProps extends ICard {
  defaultChecked?: boolean;
}

const Card: React.FC<ICardProps> = ({
  id,
  url,
  title,
  description,
  defaultChecked,
}) => {
  const cardId = useMemo(() => "card" + id, [id]);
  const background = useMemo(() => {
    if (!url) return;
    return {
      backgroundImage: `url(${url})`,
    };
  }, [url]);
  return (
    <React.Fragment>
      <input
        type="radio"
        name="slide"
        id={cardId}
        className={styles.input}
        defaultChecked={defaultChecked}
      />
      <label
        htmlFor={cardId}
        className={cn(styles.label, styles.card)}
        style={background}
      >
        <div className={styles.row}>
          <div className={styles.description}>
            <h4>{title}</h4>
            <p>{description}</p>
          </div>
        </div>
      </label>
    </React.Fragment>
  );
};

export default Card;
