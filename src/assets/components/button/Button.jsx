import styles from "./Button.module.css";

import { CiCirclePlus } from "react-icons/ci";

const Button = ({ onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      Criar <CiCirclePlus style={{ fontSize: "16px" }} />
    </button>
  );
};

export default Button;
