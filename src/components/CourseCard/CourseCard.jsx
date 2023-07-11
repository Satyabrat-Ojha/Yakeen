import styles from "./CourseCard.module.css";
import courseImg from "../../assets/course/course1.jpg";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import CircleRoundedIcon from "@mui/icons-material/CircleRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const CourseCard = () => {
  return (
    <div className={styles.courseCard}>
      <a href="#">
        <div className={styles.imageContainer}>
          <div className={styles.imageContent}>
            <div className={styles.tags}>
              <div className={styles.free}>FREE</div>
              <div className={styles.top}>TOP FACULTY</div>
            </div>
            <div className={styles.courseName}>
              <b className={styles.color2}>Python Fundamentals</b>
              <p>For Beginners</p>
            </div>
          </div>
          <div className={`${styles.blendColor} ${styles.filter2}`}></div>
          <div className={styles.gradient}></div>
          <div className={styles.image}>
            <img src={courseImg} alt="course" />
          </div>
        </div>
        <div className={styles.info}>
          <h3>Python Fundamentals for Beginners</h3>
          <div className={styles.details}>
            <div className={styles.rating}>
              <StarRoundedIcon
                style={{
                  fontSize: "18px",
                  color: " gold",
                }}
              />
              <span>4.55</span>
            </div>
            <div className={styles.count}>
              <CircleRoundedIcon style={{ fontSize: "5px", color: "gray" }} />
              <span>5L+ Learners</span>
            </div>
            <div className={styles.level}>
              <CircleRoundedIcon style={{ fontSize: "5px", color: "gray" }} />
              <span>Beginner</span>
            </div>
          </div>
        </div>
      </a>
      <div className={styles.timeandenroll}>
        <div className={styles.time}>
          <AccessTimeRoundedIcon
            style={{
              fontSize: "14px",
              color: "gray",
            }}
          />
          <span>4.0 Hrs</span>
        </div>
        <div className={styles.enroll}>
          <a href="#">
            <span>Enroll Now</span>
            <KeyboardArrowRightIcon
              style={{
                fontSize: "14px",
                color: "var(--clr-blue-500)",
              }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
