import styles from './Faq.module.css';
import TabsContent from './TabsContent';

const Faq = () => {
  return (
    <div className={styles.bgContainer}>
      <div className={styles.faqContainer}>
        <div className={styles.imgContainer}>
          <img
            src="/images/illustration-woman-online-mobile.svg"
            alt="woman"
            className={styles.imgWoman}
          />
          <img
            src="/images/illustration-woman-online-desktop.svg"
            alt="woman"
            className={styles.imgWoman}
          />
          {/* <img
            src="/images/illustration-box-desktop.svg"
            alt="box"
            className={styles.imgBox}
          /> */}
        </div>
        <div className={styles.tabsContainer}>
          <TabsContent />
        </div>
      </div>
    </div>
  );
};

export default Faq;
