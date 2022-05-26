var mongoose = require("mongoose");
var conn = require("../connection/conn");



const QuestionSchema = new mongoose.Schema({
    que : {
        type : String
    },
    option1 : {
        type : String
    },
    option2 : {
        type : String
    },
    option3 : {
        type : String
    },
    option4 : {
        type : String
    },
    ans : {
        type : String
    },
    explanation:{
        type:String
    }
    
    
});


const Del_QuizSchema = new mongoose.Schema({
   Title_quiz : {
        type : String
    },
    Desc_quiz : {
        type : String
    },
    Status_quiz : {
        type : String
    },
    Questions : [QuestionSchema]
    
});

const QuizSchema = new mongoose.Schema({
    Title_quiz : {
        type : String
    },
    Desc_quiz : {
        type : String
    },
    Status_quiz : {
        type : String
    },
    Questions : [QuestionSchema]
    
});



const adminSchema = new mongoose.Schema({

    name:{
        type:String
    },
    email:{
        type:String
    },
    pass:{
        type:String
    },
    sirname:{
        type:String
    },
    mobile_no:{
        type:Number
    },
    address:{
        type:String
    },
   
    Quiz:[QuizSchema],
    Del_Quiz : [Del_QuizSchema]
    




})

const Admin = new mongoose.model("Admin" , adminSchema);


module.exports =  Admin ;
