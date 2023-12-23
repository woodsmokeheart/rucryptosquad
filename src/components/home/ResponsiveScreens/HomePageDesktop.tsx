import React, { useCallback, useEffect, useState } from "react";

import LinkButton from "../LinkButton/LinkButton";
import Background from "../Background/Background";
import Title from "@/components/Title/Title";
import PlayButton from "@/components/elements/PlayButton/PlayButton";

const HomePageDesktop = () => {
  const [appear, setAppear] = useState(false);
  const [audio] = useState(new Audio("/GorkyParkBang.mp3"));
  const [isPlaying, setIsPlaying] = useState(false);

  const showButtonsTimeoutFn = useCallback(() => {
    setAppear(true);
    const timeout = setTimeout(() => {
      setAppear(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  const toggleAudio = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    showButtonsTimeoutFn();
  }, [showButtonsTimeoutFn]);

  return (
    <React.Fragment>
      <LinkButton
        link="/about_us"
        classNames="about"
        position="about_position"
        appear={appear}
      />
      <LinkButton
        link="/contacts"
        classNames="contacts"
        position="contacts_position"
        appear={appear}
      />
      <LinkButton
        link="/gallery"
        classNames="gallery"
        position="gallery_position"
        appear={appear}
      />
      <LinkButton
        link="/lore"
        classNames="lore"
        position="lore_position"
        appear={appear}
      />
      <LinkButton
        link="/ranks"
        classNames="ranks"
        position="ranks_position"
        appear={appear}
      />
      <LinkButton
        link="/team"
        classNames="team"
        position="team_position"
        appear={appear}
      />

      <div className="absolute bottom-0 z-10 padding-40-50 w-100 d-flex align-center justify-between">
        <Title title="Raider Street" />
        <PlayButton onClick={toggleAudio} isPlaying={isPlaying} />
      </div>
      <Background onClick={showButtonsTimeoutFn} />
    </React.Fragment>
  );
};

export default HomePageDesktop;
