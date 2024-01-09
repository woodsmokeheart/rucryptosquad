import React, { useState } from "react";
import styles from "./Tabs.module.scss";

interface TabProps {
  label: string;
  content: React.ReactNode;
}

const Tabs: React.FC<{ tabs: TabProps[] }> = ({ tabs }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTabIndex(index);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.tab_container}>
        {tabs.map((tab, index) => (
          <div
            key={index}
            onClick={() => handleTabClick(index)}
            className={
              index === activeTabIndex ? styles.tab_active : styles.tab
            }
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div>{tabs[activeTabIndex].content}</div>
    </div>
  );
};

export default Tabs;
