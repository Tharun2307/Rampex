const express = require("express");
const users = require("./data");
const router =  require("./routes/userRoutes");

const app = express();
app.use(express.json());

app.use("/", router);

app.listen(3000, ()=>{
    console.log("Server running successfully");
})