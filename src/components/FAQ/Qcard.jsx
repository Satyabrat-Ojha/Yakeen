import styles from "./Qcard.module.css";
import { useState } from "react";

const Qcard = ({ question, answer }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`${styles.card} ${isActive ? styles.active : null}`}>
      <div className={styles.question} onClick={handleClick}>
        <span className={styles.text}>{question}</span>
        <div className={styles.icon}></div>
      </div>
      <div className={styles.answer}>{answer}</div>
    </div>
  );
};

export default Qcard;
