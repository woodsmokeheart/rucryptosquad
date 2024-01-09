import React from "react";
import TypedText from "../TypedText/TypedText";
import Header from "@/components/Header/Header";
import Tabs from "../../Tabs/Tabs";
import ScrollCards from "@/components/about/ScrollCards/ScrollCards";
import Image from "next/image";
import background from "../../../assets/img/team_background.png";
import WhitePaper from "../WhitePaper/WhitePaper";

const manifestContent = <TypedText />;
const whitepaperContent = <WhitePaper />;
const teamContent = (
  <div style={{ width: "100%", textAlign: "center" }}>
    <h1 style={{ marginBottom: "50px" }}>Our Team</h1>
    <ScrollCards />
  </div>
);

const tabs = [
  { label: "Manifest", content: manifestContent },
  { label: "Whitepaper", content: whitepaperContent },
  { label: "Team", content: teamContent },
];

export const AboutUsPageDesktop = () => {
  return (
    <div className="d-flex justify-center">
      <Header />
      <Tabs tabs={tabs} />
      <Image src={background} alt="hero" fill={true} loading="eager" />
    </div>
  );
};
