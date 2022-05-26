
const bodyParser = require("body-parser");
var express = require("express");
const app = express();

require("./src/connection/conn");


const userRouter = require("./Routes/userRouter");

const port =  5001 ;

app.use(express.urlencoded({extended : false}));
app.use(express.json());
app.use(bodyParser.json());

app.use(userRouter);

app.get("/" , (req,res)=>{
    res.send("hello from server");
})






app.listen(port , (req,res)=>{
    console.log(`server is running on port ${port}`);
})