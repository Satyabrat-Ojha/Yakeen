import styles from "./footer.module.css";
import { FooterLinks } from "./links";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Facebook from "../../assets/social/facebook.svg";
import Linkedin from "../../assets/social/linkedin.svg";
import Twitter from "../../assets/social/twitter.svg";
import Youtube from "../../assets/social/youtube.svg";
import Instagram from "../../assets/social/instagram.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {FooterLinks.map((item, index) => (
          <div className={styles.item} key={index}>
            <h4>{item.title}</h4>
            <ul className={styles.links}>
              {item.links.map((link, index) => (
                <li className={styles.link} key={index}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className={styles.item}>
          <h4>Great Learning Academy</h4>
          <ul className={styles.links}>
            <li className={styles.link}>
              <a>All courses gree</a>
            </li>
            <li className={styles.link}>
              <a>All courses gree</a>
            </li>
            <li className={styles.link}>
              <a>All courses gree</a>
            </li>
            <li className={styles.link}>
              <a>All courses gree</a>
            </li>
            <li className={styles.link}>
              <a>All courses gree</a>
            </li>
            <li className={styles.link}>
              <a>All courses gree</a>
            </li>
          </ul>
        </div>
        <div className={styles.item}>
          <h4>Great Learning Academy</h4>
          <ul className={styles.links}>
            <li className={styles.link}>
              <a>All courses gree</a>
            </li>
            <li className={styles.link}>
              <a>All courses gree</a>
            </li>
            <li className={styles.link}>
              <a>All courses gree</a>
            </li>
            <li className={styles.link}>
              <a>All courses gree</a>
            </li>
            <li className={styles.link}>
              <a>All courses gree</a>
            </li>
            <li className={styles.link}>
              <a>All courses gree</a>
            </li>
          </ul>
        </div>
        <div className={styles.item}>
          <h4>Great Learning Academy</h4>
          <ul className={styles.links}>
            <li className={styles.link}>
              <a>All courses gree</a>
            </li>
            <li className={styles.link}>
              <a>All courses gree</a>
            </li>
            <li className={styles.link}>
              <a>All courses gree</a>
            </li>
            <li className={styles.link}>
              <a>All courses gree</a>
            </li>
            <li className={styles.link}>
              <a>All courses gree</a>
            </li>
            <li className={styles.link}>
              <a>All courses gree</a>
            </li>
          </ul>
        </div>
        <div className={styles.item}>
          <h4>Great Learning Academy</h4>
          <ul className={styles.links}>
            <li className={styles.link}>
              <a>All courses gree</a>
            </li>
            <li className={styles.link}>
              <a>All courses gree</a>
            </li>
            <li className={styles.link}>
              <a>All courses gree</a>
            </li>
            <li className={styles.link}>
              <a>All courses gree</a>
            </li>
            <li className={styles.link}>
              <a>All courses gree</a>
            </li>
            <li className={styles.link}>
              <a>All courses gree</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.copyright}>
        <div className={styles.left}>
          <p>© 2013 - 2023 Great Learning. All rights reserved</p>
        </div>
        <div className={styles.right}>
          <ul className={styles.social}>
            <li className={styles.socialitem}>
              <a href="#">
                <img src={Facebook} alt="fb" />
              </a>
            </li>
            <li className={styles.socialitem}>
              <a href="#">
                <img src={Linkedin} alt="fb" />
              </a>
            </li>
            <li className={styles.socialitem}>
              <a href="#">
                <img src={Youtube} alt="fb" />
              </a>
            </li>
            <li className={styles.socialitem}>
              <a href="#">
                <img src={Twitter} alt="fb" />
              </a>
            </li>
            <li className={styles.socialitem}>
              <a href="#">
                <img src={Instagram} alt="fb" />
              </a>
            </li>
          </ul>
          <div className={styles.mail}>
            <MailOutlineIcon style={{ color: "white", fontSize: "20px" }} />
            <a href="mailto:email@yakeeninstitute.com">
              email@yakeeninstitute.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
