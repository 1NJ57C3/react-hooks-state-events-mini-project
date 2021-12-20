import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [formData, setFormData] = useState({
    text:"",
    category:"Code"
  })

  function onChangeHandler(e){
    const key = e.target.name;
    const value = e.target.value;

    setFormData({ ...formData, [key]: value });
  }

  function onSubmitHandler(e){
    e.preventDefault();
    const newTask = formData;
    onTaskFormSubmit(newTask);
    setFormData({text:"",category:"Code"})
  }
  
  return (
    <form className="new-task-form" onSubmit={onSubmitHandler}>
      <label>
        Details
        <input type="text" name="text" onChange={onChangeHandler} value={formData.text} />
      </label>
      <label>
        Category
        <select name="category" onChange={onChangeHandler} value={formData.category}>
          {categories.map(category => {
            return category !== "All" ? <option key={category}>{category}</option> : null
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
