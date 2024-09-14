import styles from "./Header.module.css";
import logo from "../../images/logo.svg";
import Input from "../input/Input";
import Button from "../button/Button";
import { useState } from "react";

const Header = ({ onChange, onClick, value }) => {
  return (
    <header className={styles.header}>
      <h1>
        <img src={logo} alt='logo' />
        <span className={styles.blue}>to</span>
        <span className={styles.purple}>do</span>
      </h1>
      <div className={styles.container}>
        <Input
          type='text'
          placeholder='Adicione uma nova tarefa'
          onChange={onChange}
          value={value}
        />
        <Button onClick={onClick} />
      </div>
    </header>
  );
};

export default Header;
