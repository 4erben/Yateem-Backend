require("dotenv").config();
const express = require("express");
const connectDB = require("./config/mongoose.js");
const cors = require('cors');


//Routes
const cardRouter = require("./routes/CardRouter.js");





//Initializing the app instance
const app = express();
const port = 3000 || process.env.PORT;
app.use(cors());


//app middlewares
app.use(express.static(__dirname+"/public"));
app.use(express.json());



//using routes
app.use("/card",cardRouter)



connectDB().then(()=>{
    app.listen(port,()=>{
    console.log("server started  at port:",port);
})
})
