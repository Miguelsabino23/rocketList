import styles from "./Li.module.css";
import { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";

const Li = ({ children, id, onClick }) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <li className={isChecked ? styles["lineTrough"] : ""}>
      <input
        type='checkbox'
        id={id}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
      {children}
      <RiDeleteBin5Line
        onClick={onClick}
        style={{
          color: "#808080",
          cursor: "pointer",
          height: "20px",
          width: "20px",
        }}
      />
    </li>
  );
};

export default Li;
