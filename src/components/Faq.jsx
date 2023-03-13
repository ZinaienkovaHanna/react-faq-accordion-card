import styles from './Faq.module.css';
import ImgContent from './ImgContent';
import TabsContent from './TabsContent';

const Faq = () => {
  return (
    <div className={styles.bgContainer}>
      <div className={styles.faqContainer}>
        <div></div>
        <ImgContent className={styles.imgContainer} />
        <TabsContent className={styles.tabsContainer} />
      </div>
    </div>
  );
};

export default Faq;
