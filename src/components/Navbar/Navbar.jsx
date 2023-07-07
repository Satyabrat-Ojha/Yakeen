import styles from "./navbar.module.css";
import Logo from "../../assets/logo.png";
import Degree from "../../assets/degree.svg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <img src={Logo} alt="Yakeen" />
        </div>
        <div className={styles.browse}>
          <span>BROWSE</span>
          <KeyboardArrowDownIcon style={{ fontSize: "20px" }} />
        </div>
        <div className={styles.search}>
          <SearchIcon
            style={{
              fontSize: "23px",
              color: "var(--clr-blue-900)",
              opacity: "0.85",
            }}
          />
          <input type="text" placeholder="Try &#34;Data science&#34;" />
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.programs}>
          <img src={Degree} alt="" />
          <span>Degree & Certificate Programs</span>
        </div>
        <div className={styles.login}>Login</div>
        <div className={styles.signup}>Sign Up</div>
      </div>
    </div>
  );
};

export default Navbar;
