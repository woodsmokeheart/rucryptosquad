import React from "react";
import styles from "./ScrollCards.module.scss";
import { cardsMock } from "../mock/cardsMock";
import Card from "../Card/Card";

const ScrollCards: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {cardsMock.map((card, index) => (
          <Card key={card.id} {...card} defaultChecked={index + 1 === 1} />
        ))}
      </div>
    </div>
  );
};

export default ScrollCards;
