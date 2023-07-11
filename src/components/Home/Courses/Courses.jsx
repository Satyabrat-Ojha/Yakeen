import { useState } from "react";
import styles from "./Courses.module.css";
import CourseCard from "../../CourseCard/CourseCard";

const Courses = () => {
  const [trending, setTrending] = useState(true);

  return (
    <div className={styles.courses}>
      <h2 className={styles.title}>
        Explore new and trending free online courses
      </h2>
      <div className={styles.toggle}>
        <button
          className={trending ? styles.active : styles.inactive}
          onClick={() => setTrending(true)}
        >
          TRENDING
        </button>
        <button
          className={trending ? styles.inactive : styles.active}
          onClick={() => setTrending(false)}
        >
          NEW
        </button>
      </div>
      <div className={styles.coursesContainer}>
        <div className={styles.courseList}>
          <CourseCard />
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

export default Courses;
