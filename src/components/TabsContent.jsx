import data from '../data/data';
import { useState } from 'react';

import styles from './TabsContent.module.css';

const TabsContent = () => {
  const [activeTab, setActiveTab] = useState(null);

  const handleTabClick = (i) => {
    setActiveTab(i === activeTab ? null : i);
  };

  return (
    <div className={styles.tabsContainer}>
      <h2>FAQ</h2>
      <div className={styles.tabsContainer}>
        {data.map((tab, i) => (
          <div key={tab.id} className={styles.tabContainer}>
            <button
              className={`${styles.tab} ${
                activeTab === i ? styles.active : ''
              }`}
              onClick={() => handleTabClick(i)}
            >
              {tab.question}
              <img
                src="../images/icon-arrow-down.svg"
                className={`${styles.arrow} ${
                  activeTab === i ? styles.active : ''
                }`}
                alt="arrow"
              />
            </button>
            <div
              key={tab.id}
              className={`${styles.tabContent} ${
                activeTab === i ? styles.active : ''
              }`}
            >
              <p>{tab.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabsContent;
