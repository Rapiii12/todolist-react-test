import { useState } from "react";
import Todo from "./Todo";
import '../index.css'
import AddTask from "./AddTask";

function TodoWrapper() {
  const [tasks,setTasks] = useState([])

  const addTask = (task) => {
    setTasks([...tasks, {task: task, completed: false, edited: false}])
  }

  const toggleTaskCompletion = (index) => {
    setTasks(tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    ))
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((task, i) => i !== index));
  };
  
  const editTask = (index) => {
    setTasks(tasks.map((task,i) => i === index ? { ...task, edited: true} : task))
  }

  const updateTask = (index,t) => {
    setTasks(tasks.map((task,i) => i === index ? { ...task, task: t, edited: false} : task))
  }

  return(
    <>
      <div>
        <h1>Todo List</h1>
        <AddTask addTask={addTask}/>
        <Todo tasks={tasks} deleteTask={deleteTask} editTask={editTask} updateTask={updateTask} completedChange={toggleTaskCompletion} />
        <p>{localStorage.getItem('name')}</p>
        <p>{sessionStorage.getItem('name')}</p>
      </div>
    </>
  )
}

export default TodoWrapper