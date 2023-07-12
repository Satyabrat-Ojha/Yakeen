import styles from "./Home.module.css";
import Hero from "../../components/Home/Hero/Hero";
import Courses from "../../components/Home/Courses/Courses";
import CourseMenu from "../../components/Home/CoursesMenu/CourseMenu";

const Home = () => {
  return (
    <div className={styles.home}>
      <Hero />
      <Courses />
      <CourseMenu />
    </div>
  );
};

export default Home;
