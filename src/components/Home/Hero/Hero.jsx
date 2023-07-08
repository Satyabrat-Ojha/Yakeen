import styles from "./hero.module.css";
import Banner from "../../../assets/banner.webp";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.left}>
          <small>GREAT LEARNING ACADEMY</small>
          <h1>
            Learn Job ready skills from
            <span className={styles.textOrange}> free </span>
            online courses with certificates
          </h1>
          <p className={styles.highlights}>
            1000+ Free Courses, Live Sessions by Experts, and Job Opportunities
            from 2800+ Companies. Join 1 Crore+ learners to build your dream
            career now!
          </p>
          <a href="#" className={styles.button}>
            START FOR FREE
          </a>
        </div>
        <div className={styles.right}>
          <img alt="banner" src={Banner} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
