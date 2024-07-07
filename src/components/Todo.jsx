import React from 'react';
import EditTask from "./EditTask";

function Todo({ tasks, deleteTask, editTask, updateTask, completedChange }) {

  return (
    <>
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          {task.edited ? (
            <EditTask t={task} i={index} update={updateTask} />
          ) : (
            <>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => completedChange(index)}
              />
              {task.completed ? (
                <p style={{ textDecoration: 'line-through' }} className="task">
                  {task.task}
                </p>
              ) : (
                <p className="task">{task.task}</p>
              )}
              <button onClick={() => editTask(index)}>Edit</button>
              <button onClick={() => deleteTask(index)}>Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  </>
  );
}

export default Todo;
