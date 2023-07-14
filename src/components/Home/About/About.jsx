import { useState } from "react";
import styles from "./About.module.css";
import { lessContent, content } from "./content";

const About = () => {
  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          <strong>Yakeen The Learning Institute</strong>{" "}
        </h2>
        {isReadMore ? lessContent() : content()}
        <span className={styles.readMore} onClick={toggleReadMore}>
          {isReadMore ? "Read more" : "Show less"}
        </span>
      </div>
    </div>
  );
};

export default About;
