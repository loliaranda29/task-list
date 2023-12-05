const app = require('./app')
const PORT = process.env.PORT
const db = require("./config");

db();
app.listen(PORT , ()=>console.log(`server on port ${PORT}`))