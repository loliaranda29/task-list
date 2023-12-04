const { Schema, model } = require("mongoose");

const noteSchema = new Schema({
    status: Boolean,
    task: String,
}, 
{
    timetamps: false,
    versionkey: false,
}
);

const Task = new model("Notes", noteSchema);

module.exports = Task;