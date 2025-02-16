import "./App.css";
import ToDoList from "./components/ToDoList";
import Form from "./components/Form";
import { useState } from "react";
function App() {
  const [toDoList, setToDoList] = useState([]);

  const updateTaskList = (task) => setToDoList([...toDoList, task]);
  const deleteTask = (task) =>
    setToDoList(toDoList.filter((item) => task !== item));
  return (
    <div className="App">
      <h1>ToDo List App</h1>
      <Form updateTaskList={updateTaskList} />
      <ToDoList toDoList={toDoList} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
