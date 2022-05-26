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
    selected_option:{
        type:String
    },
    explanation:{
        type:String
    }
    
    
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
    Score_Quiz:{
        type:String
    },
    Questions : [QuestionSchema]
    
});


const personSchema = new mongoose.Schema({
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
        gender:{
            type:String
        },
        mobile_no:{
            type:Number
        },
        address:{
            type:String
        },
        product:{
            type:String
        },
        post:{
            type:String
        },
        desc:{
            type:String
        },
        status : {
            type:String
        },
        Quiz:[QuizSchema],
        Scr_Quiz : [QuizSchema],
        

});




const Person = new mongoose.model("Person" , personSchema);



module.exports =  Person ;
