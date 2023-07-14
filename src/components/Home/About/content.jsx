import styles from "./About.module.css";

const lessContent = () => {
  console.log("lessContent");
  return (
    <div>
      <h4 className={styles.subtitle}>
        Great Learning Academy - What do we offer?
      </h4>
      <p className={styles.desc}>
        Great Learning is India’s leading professional learning platform, with a
        mission to make professionals proficient and future-ready. Great
        Learning Academy, an initiative taken by Great Learning to provide free
        online courses in various domains, enables professionals and students to
        learn the most in-demand skills to help them achieve career success.
      </p>
    </div>
  );
};

const content = () => {
  return (
    <>
      <h4 className={styles.subtitle}>
        Great Learning Academy - What do we offer?
      </h4>
      <p className={styles.desc}>
        Great Learning is India’s leading professional learning platform, with a
        mission to make professionals proficient and future-ready. Great
        Learning Academy, an initiative taken by Great Learning to provide free
        online courses in various domains, enables professionals and students to
        learn the most in-demand skills to help them achieve career success.
      </p>
      <p className={styles.desc}>
        Great Learning Academy offers free certificate courses with 1000+ hours
        of content across 800+ courses, in various domains such as Data Science,
        Machine Learning, Artificial Intelligence, IT & Software, Cyber
        Security, Cloud Computing, Marketing & Finance, Big Data, Digital
        Marketing, Interview Preparation, Design, and Video editing and so much
        more. There are several courses in these domains that are available in
        Hindi too. Great Learning Academy has offered free online courses with
        certificates to 2.5 Million+ learner from across 160 countries. The
        Great Learning Academy platform allows you to achieve your career
        aspirations by working on real-world projects, learning in-demand
        skills, and gaining knowledge from the best free online courses with
        certificates.
      </p>
      <p className={styles.desc}>
        In today’s world, upskilling has become essential. Recruiters are
        looking to hire individuals who possess skills such as artificial
        intelligence, data science, digital marketing, and other new-age
        technologies. Continuous learning prepares an individual to adapt well
        to the market changes and stay relevant.
      </p>
      <h4 className={styles.subtitle}>
        What better way to power ahead in your career than to learn the most
        in-demand skills for free?
      </h4>
      <p className={styles.desc}>
        Apart from the free courses, Great Learning Academy also provides video
        content and live sessions with industry experts as well. These live
        sessions can help you gain a better understanding of the concepts in
        real-time and allow you to ask the experts any questions or queries that
        you may have. You can learn new concepts in any field that you are
        interested in. All you have to do is sign up on Great Learning Academy
        with a few simple steps, and you’re ready to learn. The live sessions
        are saved on GL Academy, allowing you to look back to it or refer to
        these sessions when you wish to.
      </p>
      <p className={styles.desc}>
        Great Learning offers courses that can be taken by college students to
        working professionals, owing to the wide range of courses, from data
        science to cloud computing to cybersecurity to marketing and finance and
        many more. The specially designed courses enable you to learn the
        in-demand skills and race through your careers. At Great Learning
        Academy, we aim to make it a one-stop destination for learning.
      </p>
      <p className={styles.desc}>
        Once you sign up for Great Learning Academy, you can enroll in any
        number of free online classes as there is no limit to learning. Each of
        these courses will be self-paced and can be completed at your
        convenience. Completing the course at your own pace allows you to look
        back on the content and revisit topics to gain a better understanding.
        Great Learning Academy offers several online quizzes and assignments
        too. Upon completion of online Quizzes/Assignments, you will receive a
        course completion certificate. Great Learning helps you become a
        well-rounded professional, and our courses help you gain mastery over
        necessary skills. Among the many free data science courses, free online
        computer courses, free digital marketing courses, and free cybersecurity
        courses available today, Great Learning Academy’s courses stand out and
        help you transition to your dream career in a well-structured manner.
      </p>
    </>
  );
};

export { lessContent, content };
