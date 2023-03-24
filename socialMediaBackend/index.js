const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const dotenv = require('dotenv');
const helmet = require("helmet");
const morgon = require("morgan")
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth")
const postRoute = require("./routes/post.js")

const app = express();
dotenv.config();


mongoose.connect(process.env.MONGO_URL,{UseNewUrlParser: true},()=>{
    console.log("connected sucessfully")
})


//middlewares
app.use(express.json());
app.use(morgon("common"));
app.use(helmet())
app.use(cors())


app.use("/api/users",userRoute)
app.use("/api/auth",authRoute)
app.use("/api/post",postRoute)

app.get('/',(req,res)=>{
    res.send("hello from express");
})

app.listen(8100,()=>{
    console.log("listnening at the port 8100")
})