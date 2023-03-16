import styles from './Faq.module.css';
import Tabs from './Tabs';

const Faq = () => {
  return (
    <section className={styles.bgContainer}>
      <div className={styles.faqContainer}>
        <div>
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
          <img
            src="/images/illustration-box-desktop.svg"
            alt="box"
            className={styles.imgBox}
          />
        </div>
        <div className={styles.tabsContainer}>
          <h2>FAQ</h2>
          <Tabs />
        </div>
      </div>
    </section>
  );
};

export default Faq;
