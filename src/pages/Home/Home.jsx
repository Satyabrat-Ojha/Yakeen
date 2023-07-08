import styles from "./Home.module.css";
import Hero from "../../components/Home/Hero/Hero";
import Courses from "../../components/Home/Courses/Courses";

const Home = () => {
  return (
    <div className={styles.home}>
      <Hero />
      <Courses />
    </div>
  );
};

export default Home;
