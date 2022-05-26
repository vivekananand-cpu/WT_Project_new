var mongoose = require("mongoose");

mongoose.connect("mongodb+srv://vivek:vivek123@cluster0.cb704.mongodb.net/collage?retryWrites=true&w=majority" , {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false,
    useCreateIndex:true
}).then(function (){
    console.log("connection sucessfull");
}).catch(function(err){
    console.log(err);
})
