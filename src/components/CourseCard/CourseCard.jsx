import styles from "./CourseCard.module.css";
import courseImg from "../../assets/course/course1.jpg";

const CourseCard = () => {
  return (
    <div className={styles.courseCard}>
      <a href="#">
        <div className={styles.imageContainer}>
          <div className={`${styles.blendColor} ${styles.filter2}`}></div>
          <div className={styles.gradient}></div>
          <div className={styles.image}>
            <img src={courseImg} alt="course" />
          </div>
        </div>
        <div className={styles.info}>Info</div>
      </a>
    </div>
  );
};

export default CourseCard;
