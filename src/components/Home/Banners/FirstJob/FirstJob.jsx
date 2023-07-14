import styles from "./FirstJob.module.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import banner from "../../../../assets/banner/firstjob.png";

const FirstJob = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h4>Get your first job with Great Learning Career Academy</h4>
          <p>
            Go from Learning to earning in 16 weeks Programs starting at Rs 5000
            per month
          </p>
          <a href="#">
            <span>Explore Programs</span>{" "}
            <ArrowForwardIcon style={{ fontSize: "23px" }} />
          </a>
        </div>
        <div className={styles.image}>
          <img src={banner} alt="banner" />
        </div>
      </div>
    </div>
  );
};

export default FirstJob;
