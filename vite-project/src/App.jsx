import React from 'react';
import './App.css';
import TaskList from './components/TaskList';
import Title from './components/Header';
import UseTaskManager from './hooks/hooks'; 

const App = () => {
  const {
    tasks,
    newTask,
    setNewTask,
    addTask,
    editTask,
    deleteTask,
  } = UseTaskManager();

  const handleTaskSubmission = (event) => {
    event.preventDefault();
    addTask();
  };

  return (
    <div className="App">
      <Title />
      <form onSubmit={handleTaskSubmission}>
        <div className="task-container">
          <div className="task-add">
            <input
              type="text"
              placeholder="Nueva tarea"
              value={newTask.name}
              onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
            />&nbsp; &nbsp;
            <button type="submit">
              <span role="img" aria-label="Agregar tarea">
                ➕
              </span>
            </button>
          </div>
        </div>
      </form>
      <TaskList tasks={tasks} editTask={editTask} deleteTask={deleteTask} />
    </div>
  );
};

export default App;