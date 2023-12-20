import React, { useEffect, useState } from "react";
import LinkButton from "../../LinkButton";
import Background from "../../Background";

const HomePageDesktop = () => {
  const [buttonsVisible, setButtonsVisible] = useState(true);

  const handleBackgroundClick = () => {
    setButtonsVisible(true);
    setTimeout(() => {
      setButtonsVisible(false);
    }, 5000);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setButtonsVisible(false);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <React.Fragment>
      {buttonsVisible && (
        <React.Fragment>
          <LinkButton link="/about_us" classNames="about" />
          <LinkButton link="/contacts" classNames="contacts" />
          <LinkButton link="/gallery" classNames="gallery" />
          <LinkButton link="/lore" classNames="lore" />
          <LinkButton link="/ranks" classNames="ranks" />
          <LinkButton link="/team" classNames="team" />
        </React.Fragment>
      )}
      <Background onClick={handleBackgroundClick} />
    </React.Fragment>
  );
};

export default HomePageDesktop;
