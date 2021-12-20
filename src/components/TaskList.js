import React from "react";
import Task from "./Task"

function TaskList({ tasks, handleTaskRemoval, selectedCategory }) {
  
  const displayedTasks = tasks.filter(task => selectedCategory === "All" ? true : task.category === selectedCategory);
  
  return (
    <div className="tasks">
      {displayedTasks.map(task => ( <Task task={task} key={task.text} handleTaskRemoval={handleTaskRemoval} /> ))}
    </div>
  );
}

export default TaskList;
