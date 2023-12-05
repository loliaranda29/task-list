const { Schema, model } = require("mongoose");

const noteSchema = new Schema({
    status: Boolean,
    task: String,
}, 
{
    timestamps: false,
    versionKey: false, 
}
);

const Task = new model("Notes", noteSchema);

module.exports = Task;