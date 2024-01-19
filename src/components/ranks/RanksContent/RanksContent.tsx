import React, { ReactNode, useEffect, useState } from "react";
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
  const [audioOpen] = useState(new Audio("/open_journal.mp3"));
  const [audioClose] = useState(new Audio("/tp.mp3"));

  const playAudioOpen = () => {
    audioOpen.play();
  };
  const playAudioClose = () => {
    audioClose.play();
  };

  const stopAudioOpen = () => {
    audioOpen.pause();
    audioOpen.currentTime = 0;
  };
  const stopAudioClose = () => {
    audioClose.pause();
    audioClose.currentTime = 0;
  };

  const handleClickOpen = () => {
    setIsDescription((prev) => !prev);

    playAudioOpen();
  };

  const handleClickClose = () => {
    setIsDescription((prev) => !prev);

    playAudioClose();
  };

  useEffect(() => {
    audioOpen.addEventListener("ended", stopAudioOpen);
    return () => {
      audioOpen.removeEventListener("ended", stopAudioOpen);
    };
  }, []);

  useEffect(() => {
    audioClose.addEventListener("ended", stopAudioClose);
    return () => {
      audioClose.removeEventListener("ended", stopAudioClose);
    };
  }, []);

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
            <button className={styles.button_more} onClick={handleClickOpen}>
              Read more
            </button>
          </div>
        </>
      ) : (
        <>
          <div className={styles.description_rank}>{description}</div>
          <button className={styles.button_hide} onClick={handleClickClose}>
            Hide
          </button>
        </>
      )}
    </div>
  );
}
