const {Router} =require("express");
const express = require('express');
const Task = require('../models/index');
const router = express.Router();

router.get("/", async (req, res) => {
    const tasks = await Task.find();
    res.status(200).json({tasks});
});

router.post("/", async(req, res) => {
    const {task} = req.body;
    const newTask = {
        task,
        status: false,
    };

    const taskDB = new Task(newTask);
    await taskDB.save();

    res.status(201).json({messsage: "Tarea creada"});
});

const validateUpdateData = (req, res, next) => {
    const { task, status } = req.body;
  
    if (!task || !status || task.trim() === '' || status.trim() === '') {
      return res.status(400).json({ error: 'Task and status cannot be empty' });
    }
  
    next(); 
  };

router.put("/:id", validateUpdateData,async(req, res) => {
    const {id} = req.params;
    const {task, status} = req.body;
    try {
        const updateTask = await Task.findByIdAndUpdate(id, { task, status });
        res.status(201).json({ message: "Tarea modificada" });
      } catch (error) {
        console.error('Error updating task:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
    
});

router.delete("/:id", async(req, res) => {
    const {id} = req.params;

    await Task.findByIdAndDelete(id);
    res.status(204).json({message: "tarea eliminada"});
});

module.exports = router;