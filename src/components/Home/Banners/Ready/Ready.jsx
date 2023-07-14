import styles from "./Ready.module.css";
import readyBanner from "../../../../assets/banner/ready.png";

const Ready = () => {
  return (
    <div
      className={styles.ready}
      style={{
        backgroundImage: `url(${readyBanner})`,
      }}
    >
      <div className={styles.title}>Ready to learn?</div>
      <div className={styles.button}>
        <a href="#">Start Now</a>
      </div>
    </div>
  );
};

export default Ready;
