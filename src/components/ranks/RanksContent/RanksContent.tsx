import React, { ReactNode, useState } from "react";
import styles from "./RanksContent.module.scss";
import Image, { StaticImageData } from "next/image";
import resident from "../../../assets/img/img_ranks/resident.png";
import senator from "../../../assets/img//img_ranks/senator.png";
import {
  RanksUtilityResident,
  RanksUtilitySenator,
} from "../RanksUtility/RanksUtility";

const rankMock = [
  {
    src: resident,
    title: "Resident",
    description: <RanksUtilityResident />,
  },
  {
    src: senator,
    title: "Senator",
    description: <RanksUtilitySenator />,
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
        return (
          <Card
            key={key}
            src={i?.src}
            title={i.title}
            description={i?.description}
          />
        );
      })}
    </div>
  );
}

function Card({
  src,
  title,
  description,
}: {
  src: StaticImageData;
  title: string;
  description: ReactNode;
}) {
  const [isDescription, setIsDescription] = useState(false);
  return (
    <div className={styles.cardRank}>
      {!isDescription ? (
        <>
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
            <button
              className={styles.button_more}
              onClick={() => setIsDescription((prev) => !prev)}
            >
              Read more
            </button>
          </div>
        </>
      ) : (
        <>
          <div className={styles.description_rank}>{description}</div>
          <button
            className={styles.button_hide}
            onClick={() => setIsDescription((prev) => !prev)}
          >
            Hide
          </button>
        </>
      )}
    </div>
  );
}
