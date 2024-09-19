import styles from "./Header.module.css";
import logo from "../../images/logo.svg";
import { CiCirclePlus } from "react-icons/ci";

const Header = ({ onChange, onClick, value }) => {
  return (
    <header className={styles.header}>
      <h1>
        <img src={logo} alt='logo' />
        <span className={styles.blue}>to</span>
        <span className={styles.purple}>do</span>
      </h1>
      <div className={styles.container}>
        <input
          className={styles.input}
          type='text'
          placeholder='Adicione uma nova tarefa'
          onChange={onChange}
          value={value}
        />
        <button className={styles.button} onClick={onClick}>
          Criar <CiCirclePlus style={{ fontSize: "16px" }} />
        </button>
      </div>
    </header>
  );
};

export default Header;
