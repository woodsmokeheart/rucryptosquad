import React from "react";
import LinkButton from "../../LinkButton";
import Background from "../../Background";

const HomePageDesktop = () => {
  return (
    <React.Fragment>
      <LinkButton link="/about_us" classNames="about" />
      <LinkButton link="/contacts" classNames="contacts" />
      <LinkButton link="/gallery" classNames="gallery" />
      <LinkButton link="/lore" classNames="lore" />
      <LinkButton link="/ranks" classNames="ranks" />
      <LinkButton link="/team" classNames="team" />
      <Background />
    </React.Fragment>
  );
};

export default HomePageDesktop;
