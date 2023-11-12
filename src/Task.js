import React, { memo } from "react";

const Tasks = ({ tasks, addTask }) => {
  console.log("task rendered because task is added");
  return (
    <div>
      <h1>Optimiztion UseCallback() and memo</h1>
      <h2>Childrens Component Task</h2>
      {tasks.map((task, i) => (
        <p key={i}>{task}</p>
      ))}
      <button onClick={addTask}>Add Task</button>
    </div>
  );
};

export default memo(Tasks);
