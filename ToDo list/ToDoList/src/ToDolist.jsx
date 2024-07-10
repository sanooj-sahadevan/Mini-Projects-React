/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */

import React, { useState } from "react";

function myTodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
      console.log('ohigufyd');
    }
  }

  function deleteTask(index) {
    const updatetask = tasks.filter((_,i)=>i !== index)
    setTasks(updatetask)
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
        const updatedTasks = [...tasks];
        [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
        setTasks(updatedTasks);
    }
}

  function moveTaskUp(index) {
    if(index>0){
        const updatetask = [...tasks];
        [updatetask[index],updatetask[index-1]] = [updatetask[index-1],updatetask[index]]
        setTasks(updatetask)
    }


  }

const duplicate=((task)=>{
  
    setTasks((t) => [...t, task]);
    setNewTask("");
  
 
})





  return (
    <div className="todolist">
      <h1>DO-IT</h1>

      <input
        type="text"
        value={newTask}
        onChange={handleInputChange}
        placeholder="Add your task..." maxLength="15" id="yep"
      />
      <button className="add-button"  onClick={addTask}>
        Add
      </button>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button onClick={() => deleteTask(index)} className="delete">
              Delete
            </button>
            <button onClick={() => moveTaskDown(index)} className="movebutton">
              Down
            </button>
            <button onClick={() => moveTaskUp(index)} className="movebutton">
              Up
            </button>
            <button onClick={() => duplicate(task)} className="movebutton">
              Duplicate
            </button>



          </li>
        ))}
      </ol>
    </div>
  );
}

export default myTodoList;
