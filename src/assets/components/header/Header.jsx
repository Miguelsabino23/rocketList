/* eslint-disable react/prop-types */
import styles from "./Header.module.css";
import logo from "../../images/logo.svg";

const Header = ({ children }) => {
  return (
    <header className={styles.header}>
      <h1>
        <img src={logo} alt='logo' />
        <span className={styles.blue}>to</span>
        <span className={styles.purple}>do</span>
      </h1>
      <div className={styles.container}>{children}</div>
    </header>
  );
};

export default Header;
