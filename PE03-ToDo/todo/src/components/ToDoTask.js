export default function ToDoTask({ task, deleteTask }) {
  return (
    <li>
      <p>{task}</p>
      <button onClick={(e) => deleteTask(task)}>Delete</button>
    </li>
  );
}
