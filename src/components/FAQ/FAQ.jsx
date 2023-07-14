import styles from "./FAQ.module.css";
import Qcard from "./Qcard";
import { Questions } from "./Questions";

const FAQ = () => {
  return (
    <div className={styles.FAQ}>
      <div className={styles.container}>
        <h3 className={styles.heading}>Frequently Asked Questions</h3>
        <div className={styles.wrapper}>
          {Questions.map((question, index) => (
            <Qcard
              key={index}
              question={question.question}
              answer={question.answer}
            />
          ))}
        </div>
        <p className={styles.contact}>
          For any query, please contact us at{" "}
          <a href="mailto: academy@greatlearning.in">
            academy@greatlearning.in
          </a>
        </p>
      </div>
    </div>
  );
};

export default FAQ;
