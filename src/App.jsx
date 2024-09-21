import styles from "./App.module.css";
import { useEffect, useState } from "react";
import { LuClipboardList } from "react-icons/lu";
import { CiCirclePlus } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";

import Header from "./assets/components/header/Header";
import Tasks from "./assets/components/li/Tasks";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTask] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [completedCount, setCompletedCount] = useState(0);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    const completedTasks = tasks.filter((task) => task.isChecked).length;
    setCompletedCount(completedTasks);
  }, [tasks]);

  const addTask = () => {
    if (inputValue.trim()) {
      setTask((prevTask) => [
        ...prevTask,
        { text: inputValue, isChecked: false },
      ]);
      setInputValue("");
    }
  };

  const removeTask = (index) => {
    setTask(tasks.filter((_, i) => i !== index));
  };

  const handleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, isChecked: !task.isChecked } : task
    );
    setTask(updatedTasks);
  };

  return (
    <div className={styles.container}>
      <Header>
        <input
          className={styles.input}
          type='text'
          placeholder='Adicione uma nova tarefa'
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        <button className={styles.button} onClick={addTask}>
          Criar <CiCirclePlus style={{ fontSize: "16px" }} />
        </button>
      </Header>
      <main className={styles.main}>
        <div className={styles.mainContainer}>
          <div className={styles.tasksCount}>
            <p>
              Tarefas criadas{" "}
              <span className={styles.count}>{tasks.length}</span>
            </p>
            <p>
              Concluídas{" "}
              <span className={styles.count}>
                {completedCount} de {tasks.length}
              </span>
            </p>
          </div>

          {tasks.length > 0 ? (
            <div className={styles.tasksContainer}>
              <ul>
                {tasks.map((task, index) => (
                  <Tasks key={index}>
                    <input
                      type='checkbox'
                      checked={task.isChecked}
                      onChange={() => handleTaskCompletion(index)}
                    />
                    <span
                      className={task.isChecked ? styles["lineTrough"] : ""}
                    >
                      {task.text}
                    </span>
                    <RiDeleteBin5Line
                      onClick={() => removeTask(index)}
                      style={{
                        color: "#808080",
                        cursor: "pointer",
                        height: "20px",
                        width: "20px",
                      }}
                    />
                  </Tasks>
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
