import { useState } from "react";
import styles from "./VerticalTabs.module.scss";
import Link from "next/link";

interface Tab {
  label: string;
  content: React.ReactNode;
}

interface VerticalTabsProps {
  tabs: Tab[];
}

const VerticalTabs: React.FC<VerticalTabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className={styles.verticalTabsContainer}>
      <div className={styles.tabs}>
        <Link href="/" className={styles.tab}>
          Home
        </Link>
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`${styles.tab} ${
              index === activeTab ? styles.active : ""
            }`}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className={styles.tabContent}>{tabs[activeTab].content}</div>
    </div>
  );
};

export default VerticalTabs;
