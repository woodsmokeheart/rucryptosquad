import React from "react";
import styles from "./RanksContent.module.scss";
import Image, { StaticImageData } from "next/image";
import resident from "../../../assets/img/img_ranks/resident.png";
import senator from "../../../assets/img//img_ranks/senator.png";

const rankMock = [
  {
    src: resident,
    title: "Resident",
  },
  {
    src: senator,
    title: "Senator",
  },
];

const RanksContent = () => {
  return (
    <div className={styles.wrapper}>
      <Content />
    </div>
  );
};

export default RanksContent;

function Content() {
  return (
    <div className={styles.content_container}>
      {rankMock?.map((i, key) => {
        return <Card key={key} src={i?.src} title={i.title} />;
      })}
    </div>
  );
}

function Card({ src, title }: { src: StaticImageData; title: string }) {
  return (
    <div className={styles.cardRank}>
      <div className={styles.image}>
        <Image
          src={src}
          alt="rank"
          width={500}
          sizes="100%"
          className={styles.image}
        />
      </div>
      <div className={styles.info}>
        <h2>{`Rank: ${title}`}</h2>
        <button className={styles.button_more}>Read more</button>
      </div>
    </div>
  );
}
