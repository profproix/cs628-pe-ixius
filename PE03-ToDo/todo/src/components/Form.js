import { useState } from "react";
export default function Form({ updateTaskList }) {
  const [formData, setFormData] = useState({ task: "" });

  const handleChange = (e) =>
    //I don't really need this to be so dynamic because I have only one input but I consider this future proofing incase more inputs are added
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault(e);
    updateTaskList(formData.task);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={formData.task}
          onChange={handleChange}
          placeholder="Enter task description"
        />
        <button type="submit">Add Task</button>
      </form>
    </>
  );
}
