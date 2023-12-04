const {Router} =require("express");

const routers = Router();

routers.get("/", async (req, res) => {
    const tasks = await Task.find();
    res.status(200).json({tasks});
});

routers.post("/", async(req, res) => {
    const {task} = req.body;
    const newTask = {
        task,
        status: false,
    };

    const taskDB = new Task(newTask);
    await taskDB.save();

    res.status(201).json({messsage: "Tarea creada"});
});

routers.put("/:id", async(req, res) => {
    const {id} = req.params;
    const {task, status} = req.body;
    //agregar middelware para verificar que los datos no vengan vacios
    const updateTask = await Task.findByIdAndUpdate(id, {task, status});
    res.status(201).json({message: "Tarea modificada"});
});

routers.delete("/:id", async(req, res) => {
    const {id} = req.params;

    await Task.findByIdAndDelete(id);
    res.status(204).json({message: "tarea eliminada"});
});

module.exports = routers;