import React from "react";

function NewTaskForm({data, handleChange, handleSubmit}) {
  const filteredCategories = data.filter((category)=>category !== "All").map((category)=>{
    return(
      <option key={category} value={category}>{category}</option>
    )
  })
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category" onChange={(e)=>handleChange(e.target.value)}>
          {filteredCategories}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
