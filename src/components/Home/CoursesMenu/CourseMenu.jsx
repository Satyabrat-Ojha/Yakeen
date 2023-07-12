import styles from "./CourseMenu.module.css";
import CourseCard from "../../CourseCard/CourseCard";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Popular from "../../../assets/domains/popular.svg";

const CourseMenu = () => {
  return (
    <div className={styles.courseMenu}>
      <h2 className={styles.heading}>Explore Free Online Courses</h2>
      <p className={styles.browse}>Browse by Domains</p>
      <div className={styles.container}>
        <div className={styles.domains}>
          <div className={styles.wrapper}>
            <a href="#" className={`${styles.domain} ${styles.active}`}>
              <img className={Popular} src={Popular} alt="Popular" />
              <span className={styles.title}>Popular Courses</span>
              <KeyboardArrowRightIcon style={{ fontSize: "23px" }} />
            </a>
            <a href="#" className={`${styles.domain}`}>
              <img className={Popular} src={Popular} alt="Popular" />
              <span className={styles.title}>IT & Software</span>
              <KeyboardArrowRightIcon style={{ fontSize: "23px" }} />
            </a>
            <a href="#" className={`${styles.domain}`}>
              <img className={Popular} src={Popular} alt="Popular" />
              <span className={styles.title}>Data Science</span>
              <KeyboardArrowRightIcon style={{ fontSize: "23px" }} />
            </a>
            <a href="#" className={`${styles.domain}`}>
              <img className={Popular} src={Popular} alt="Popular" />
              <span className={styles.title}>Artificial Intelligence</span>
              <KeyboardArrowRightIcon style={{ fontSize: "23px" }} />
            </a>
            <a href="#" className={`${styles.domain}`}>
              <img className={Popular} src={Popular} alt="Popular" />
              <span className={styles.title}>Machine Learning</span>
              <KeyboardArrowRightIcon style={{ fontSize: "23px" }} />
            </a>
            <a href="#" className={`${styles.domain}`}>
              <img className={Popular} src={Popular} alt="Popular" />
              <span className={styles.title}>Digital Marketing</span>
              <KeyboardArrowRightIcon style={{ fontSize: "23px" }} />
            </a>
            <a href="#" className={`${styles.domain}`}>
              <img className={Popular} src={Popular} alt="Popular" />
              <span className={styles.title}>Digital Marketing</span>
              <KeyboardArrowRightIcon style={{ fontSize: "23px" }} />
            </a>
            <a href="#" className={`${styles.domain}`}>
              <img className={Popular} src={Popular} alt="Popular" />
              <span className={styles.title}>Digital Marketing</span>
              <KeyboardArrowRightIcon style={{ fontSize: "23px" }} />
            </a>
            <a href="#" className={`${styles.domain}`}>
              <img className={Popular} src={Popular} alt="Popular" />
              <span className={styles.title}>Digital Marketing</span>
              <KeyboardArrowRightIcon style={{ fontSize: "23px" }} />
            </a>
            <a href="#" className={`${styles.domain}`}>
              <img className={Popular} src={Popular} alt="Popular" />
              <span className={styles.title}>Digital Marketing</span>
              <KeyboardArrowRightIcon style={{ fontSize: "23px" }} />
            </a>
            <a href="#" className={`${styles.domain}`}>
              <img className={Popular} src={Popular} alt="Popular" />
              <span className={styles.title}>Digital Marketing</span>
              <KeyboardArrowRightIcon style={{ fontSize: "23px" }} />
            </a>
          </div>
        </div>
        <div className={styles.courses}>
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </div>
    </div>
  );
};

export default CourseMenu;
