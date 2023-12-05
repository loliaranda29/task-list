import { useState, useEffect } from 'react';
import axios from 'axios';

const UseTaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ task: '', completed: false });

  const fetchTasks = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/notes`);
      setTasks(response.data.tasks);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const editTask = async (taskId, newName, newCompleted) => {
    try {
      await axios.put(`http://localhost:3000/notes/${taskId}`, { task: newName, status: newCompleted });
      fetchTasks();
    } catch (error) {
      console.error('Error editing task:', error);
      console.log('Server response:', error.response); // Agrega esta línea para obtener más detalles
    }
  };

  const addTask = async () => {
    try {
      await axios.post(`http://localhost:3000/notes`, { task: newTask.name }); // Cambié newTask.name por newTask.task
      fetchTasks();
      setNewTask({ name: '', completed: false });
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };
  const deleteTask = async (taskId) => {
    try {
      await axios.delete(`http://localhost:3000/notes/${taskId}`);
      fetchTasks();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return { tasks, newTask, setNewTask, addTask, editTask, deleteTask };
};

export default UseTaskManager;
