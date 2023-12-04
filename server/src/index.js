const app = require('./app')
const PORT = process.env.PORT

db();
app.listen(PORT , ()=>console.log(`server on port ${PORT}`))