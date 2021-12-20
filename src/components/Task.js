import React from "react";

function Task({ task, handleTaskRemoval }) {
  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button className="delete" name={task.text} onClick={handleTaskRemoval}>X</button>
    </div>
  );
}

export default Task;
