import React from "react";
import styles from "./ContentLayout.module.scss";
import VerticalTabs from "../VerticalTabs/VerticalTabs";
import World from "../Articles/World/World";
import Tower from "../Articles/Tower/Tower";
import Ashley from "../Articles/Ashley/Ashley";

const ContentLayout = () => {
  const tabs = [
    { label: "RCS world", content: <World /> },
    { label: "The Mother Tower", content: <Tower /> },
    { label: "Ashley Sparks", content: <Ashley /> },
  ];
  return (
    <div className={styles.wrapper}>
      <VerticalTabs tabs={tabs} />
    </div>
  );
};

export default ContentLayout;
