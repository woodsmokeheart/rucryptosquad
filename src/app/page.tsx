import React from "react";

import LinkButton from "@/components/home/LinkButton";
import Background from "@/components/home/Background";

export default function Home() {
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
}
