import styles from "./Home.module.css";
import Hero from "../../components/Home/Hero/Hero";
import Courses from "../../components/Home/Courses/Courses";
import CourseMenu from "../../components/Home/CoursesMenu/CourseMenu";
import FirstJob from "../../components/Home/Banners/FirstJob/FirstJob";
import Ready from "../../components/Home/Banners/Ready/Ready";
import FAQ from "../../components/FAQ/FAQ";
import About from "../../components/Home/About/About";

const Home = () => {
  return (
    <div className={styles.home}>
      <Hero />
      <Courses />
      <CourseMenu />
      <FirstJob />
      <Ready />
      <FAQ />
      <About />
    </div>
  );
};

export default Home;
