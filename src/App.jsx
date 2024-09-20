/* eslint-disable react/no-children-prop */
import styles from "./App.module.css";
import { useEffect, useState } from "react";
import { LuClipboardList } from "react-icons/lu";

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
  }, [tasks]);

  const addTask = () => {
    if (inputValue.trim()) {
      setTask((prevTask) => [
        ...prevTask,
        { text: inputValue, completed: false },
      ]);
      setInputValue("");
    }
  };

  const removeTask = (index) => {
    if (tasks[index].completed) {
      setCompletedCount((prevCount) => prevCount - 1);
    }
    setTask(tasks.filter((_, i) => i !== index));
  };

  const handleTaskCompletion = (isChecked, index) => {
    const updatedTasks = tasks.map((t, i) =>
      i === index ? { ...t, completed: isChecked } : t
    );
    setTask(updatedTasks);
    setCompletedCount((prevCount) =>
      isChecked ? prevCount + 1 : prevCount - 1
    );
  };

  return (
    <div className={styles.container}>
      <Header
        onChange={(e) => setInputValue(e.target.value)}
        onClick={addTask}
        value={inputValue}
      />
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
                  <Tasks
                    key={index}
                    children={task.text}
                    id={index}
                    onClick={() => removeTask(index)}
                    onCheck={(isChecked) =>
                      handleTaskCompletion(isChecked, index)
                    }
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
