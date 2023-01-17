import React from "react";
import Task from "./Task";


function TaskList({data, handleDelete}) {
 
  
  const listingTasks = data.map((task,index)=>{
    return (
      <Task key={index} text={task.text} category={task.category} handleDelete={handleDelete}/>
    )

  })
  return (
    <div className="tasks" >
      <table>
        <tbody>
        {listingTasks}
        </tbody>
      </table>
     
    </div>
  );
}

export default TaskList;
