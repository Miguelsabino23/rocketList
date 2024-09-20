/* eslint-disable react/prop-types */
import styles from "./Tasks.module.css";
import { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";

const Tasks = ({ children, id, onClick, onCheck }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    const checked = e.target.checked;
    setIsChecked(checked);
    onCheck(checked);
  };

  return (
    <li className={isChecked ? styles["lineTrough"] : ""}>
      <input
        type='checkbox'
        id={id}
        onChange={handleCheckboxChange}
        checked={isChecked}
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

export default Tasks;
