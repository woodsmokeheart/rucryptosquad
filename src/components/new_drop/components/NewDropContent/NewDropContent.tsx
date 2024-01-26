/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styles from "./NewDropContent.module.scss";
import HeaderNewDrop from "../HeaderNewDrop/HeaderNewDrop";
import Deck from "../Deck/Deck";

const NewDropContent = () => {
  return (
    <div className={styles.wrapper}>
      <HeaderNewDrop />
      <h1 className={styles.title}>Furies</h1>
      <div className={styles.description}>
        Dear friend. We have been working hard for a long time so that you could
        get this masterpiece. This collection embodies all the dreams of our
        DAO. The world of Ethereon is gloomy, but even in it there is a place
        for beauty. We show that even beauty can be dangerous. Even a rose can
        prick. But at the same time, do not lose your radiance. Join us. Become
        a part of our DAO and rise to the top with us. Welcome to Ethereon. A
        band of Furies greets you, traveler.
      </div>
      <div className={styles.sub_description}>
        <h2>
          "Being a model of honor, strength and kindness is enough to be sung in
          ballads."
        </h2>
        <p>my1ncognito</p>
      </div>

      <div className={styles.content}>
        <div>
          <h3>1. The first generative collection of RCS</h3>
          <h3>2. 120 unique attributes</h3>
          <h3>3. Painted by the best artists</h3>
          <h3>4. Each image is themed in our world</h3>
          <h3>5. The total number of images is 999</h3>
          <h3>6. Each collected pair has its own bonus</h3>
          <h3>7. Absolutely handmade</h3>
          <h3>8. Unique references</h3>
          <h3>10. The opportunity to receive merch</h3>
        </div>
        <Deck />
      </div>
    </div>
  );
};

export default NewDropContent;
