import ToDoTask from "./ToDoTask";
export default function ToDoList({ toDoList, deleteTask }) {
  console.log(toDoList);
  return (
    <ul>
      {toDoList.map((item) => (
        <ToDoTask key={item} task={item} deleteTask={deleteTask} />
      ))}
    </ul>
  );
}
