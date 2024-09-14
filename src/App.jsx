import styles from "./App.module.css";
import { useState } from "react";
import { LuClipboardList } from "react-icons/lu";

import Header from "./assets/components/header/Header";
import Li from "./assets/components/li/Li";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);

  const handleClick = () => {
    if (inputValue.trim()) {
      setTask((prevTask) => [...prevTask, inputValue]);
      setInputValue("");
    }
  };

  const removeTask = (index) => {
    setTask(task.filter((_, i) => i !== index));
  };

  return (
    <div className={styles.container}>
      <Header
        onChange={(e) => setInputValue(e.target.value)}
        onClick={handleClick}
        value={inputValue}
      />
      <main className={styles.main}>
        <div className={styles.mainContainer}>
          <div className={styles.tasksCount}>
            <p>
              Tarefas criadas{" "}
              <span className={styles.count}>{task.length}</span>
            </p>
            <p>
              Concluídas{" "}
              <span className={styles.count}>
                {task.length} de {}
              </span>
            </p>
          </div>

          {task.length > 0 ? (
            <div className={styles.tasksContainer}>
              <ul>
                {task.map((lis, index) => (
                  <Li
                    key={index}
                    children={lis}
                    id={index}
                    onClick={() => removeTask(index)}
                  />
                ))}
              </ul>
            </div>
          ) : (
            <div className={styles.tasksContainer}>
              <LuClipboardList
                style={{
                  width: "50px",
                  height: "50px",
                  color: "#333333",
                  marginBottom: ".7rem",
                }}
              />
              <p>
                <span>Você ainda não tem tarefas cadastradas</span>
              </p>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
