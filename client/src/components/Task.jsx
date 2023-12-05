import React, { useState } from 'react';

function Task({ task, editTask, deleteTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(task.task);

  const handleSave = () => {
    editTask(task._id, task.task, task.completed); // Usamos task.task en lugar de newName
    setIsEditing(false);
  };

  const handleCheckboxChange = () => {
    editTask(task._id, task.task, !task.completed); // Enviar el nuevo estado de completado
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleCheckboxChange}
      />
      {isEditing ? (
        <>
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.task}
          </span>
        </>
      )}
      <button onClick={() => setIsEditing(!isEditing)}>
        <span role="img" aria-label="Cancel edit">
          ✏️
        </span>
      </button>
      <button onClick={() => deleteTask(task._id)}>
        <span role="img" aria-label="Delete task">
          🗑️
        </span>
      </button>
    </div>
  );
}

export default Task;
