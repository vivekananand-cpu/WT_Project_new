var Person = require("../src/model/User_model");
const Admin = require("../src/model/Admin_model");


postRegister  =  (req,res)=>{

    const { name , email , pass , sirname , gender, mobile_no , address , status } = req.body;
    console.log(status);
   
    if(!name || !email || !pass ){
        return res.status(200).send("Plz Fill The all fields ");
    }

    if(status == "Admin"){

    Admin.findOne({ email : email })
    .then((userExist)=>{
        if(userExist){
        return res.status(200).send("User Already Present");
        }
        
        const user = new Admin({ name , status , email , pass , sirname , mobile_no , address });
        user.save()
        .then((item)=>{
            console.log("done successfully");
            res.status(200).send(item);
        })
    }).catch((err)=>{
        console.log(err);
        res.status(500).send("Fail To register");
    })
    .catch(err=>{
        console.log(err);
    });

}else{

        
    Person.findOne({ email : email })
    .then((userExist)=>{
        if(userExist){
        return res.status(200).send("User Already Present");
        }
      console.log(gender);  
        const user = new Person({ name , email , gender , pass , sirname , mobile_no , address });
        user.save()
        .then((item)=>{
            console.log("done successfully");
            res.status(200).send(item);
        })
    }).catch((err)=>{
        console.log(err);
        res.status(500).send("Fail To register");
    })
    .catch(err=>{
        console.log(err);
    });



}

};



postUserLogin =  (req,res)=>{

    const { email , pass } = req.body;

    if(!email || !pass ){
        return res.status(200).send("Plz Fill The all fields ");
    }
    else{
    Person.findOne({ email : email , pass : pass })
    .then((userExist)=>{

        if(userExist){
            console.log(userExist.id);
            Person.findById(userExist.id , (err , doc)=>{
                if(!err){
                   return res.send(doc);
                }else{
                    console.log(err);
                }
            })        
            
        }
        else{            
            return res.status(200).json("Invalid User ... Plz Create Your Account");
        }
    
    }).catch(err=>{
        console.log(err);

    })
}
};




getAllData =  (req,res)=>{
    
    Person.find({} , function(err,data){
        if(err){
            console.log(err)
        }else{
            res.send(data);
        }
    })
};


getUserData = (req,res)=>{
    
    console.log(req.params.id);
    Person.findById(req.params.id , (err,doc)=>{
        if(!err){
            console.log(doc);
            res.send(doc);
        }else{
            console.log(err)
        }
    })
  
};




getUserQuizData = (req,res)=>{
    
    Person.find({'_id':req.params.id} , (err,data)=>{
        if(!err){
            console.log(data);

           res.send(data);
          
           
        }else{
            console.log(err)
        }
    })
   
};


getScoredQuizData = (req,res)=>{
    const body = req.body;
    Person.find({'_id':req.params.id} , { Quiz: {$elemMatch: { Score_Quiz  : " " }}} , (err,data)=>{
        if(!err){
            console.log(data);
            res.send(data);
        }else{
            console.log(err)
        }
    })
   
};







subQuestion = (req,res)=>{

    const body = req.body;

    console.log(req.body.que);
    console.log(req.body.selected_option);
    console.log(req.body.Title_quiz);


    

    console.log(req.params.user_id);
    console.log(req.params.id);
    console.log(req.params.Quiz_id);

     
    Person.findOne({ _id : req.params.user_id } , ( err , user ) =>{

        if(err){
            console.log(err)
        }
    
        var index = user.Quiz.findIndex(x => x.Title_quiz === body.Title_quiz);
        console.log(index);
    

    Admin.findOne({ _id : req.params.id } , ( err , info ) =>{

        if(err){
            console.log(err)
        }

        

        var index_admin = info.Quiz.findIndex(x => x.Title_quiz === body.Title_quiz);
        console.log(index_admin);

        if(index_admin == -1 ){
            
            console.log("Quizz is not creatd by admin ");
        
    
        }else{
    
            var flag_admin = info.Quiz[index_admin].Questions.findIndex(x => x.que == body.que);
            console.log(flag_admin);
        
            if(flag_admin == -1 ){

                console.log("Question is not present in quiz ")
            }
            else{

            

                if(index == -1 ){
                    index=0;
                
                
                    const sender = user.Quiz ; 

                    sender.unshift({
                        
                        Title_quiz : body.Title_quiz

                    })

                    user.Quiz = sender;

                    
                    var flag = user.Quiz[index].Questions.findIndex(x => x.que == body.que);
                    console.log(flag);

                    if(flag == -1){

                            
                        const sss = user.Quiz[index].Questions ; 

                        sss.unshift({

                            que : info.Quiz[index_admin].Questions[flag_admin].que ,  
                            option1 : info.Quiz[index_admin].Questions[flag_admin].option1,
                            option2 : info.Quiz[index_admin].Questions[flag_admin].option2,
                            option3 : info.Quiz[index_admin].Questions[flag_admin].option3,
                            option4 : info.Quiz[index_admin].Questions[flag_admin].option4,
                            ans : info.Quiz[index_admin].Questions[flag_admin].ans, 
                            selected_option : body.selected_option


                        })
                        
                        user.Quiz[index].Questions = sss;
                    }else{
                

                        user.Quiz[index].Questions[flag].que =info.Quiz[index_admin].Questions[flag_admin].que ,  
                        user.Quiz[index].Questions[flag].option1 = info.Quiz[index_admin].Questions[flag_admin].option1,
                        user.Quiz[index].Questions[flag].option2 = info.Quiz[index_admin].Questions[flag_admin].option2,
                        user.Quiz[index].Questions[flag].option3 = info.Quiz[index_admin].Questions[flag_admin].option3,
                        user.Quiz[index].Questions[flag].option4 = info.Quiz[index_admin].Questions[flag_admin].option4,
                        user.Quiz[index].Questions[flag].ans = info.Quiz[index_admin].Questions[flag_admin].ans, 
                        user.Quiz[index].Questions[flag].selected_option = body.selected_option

                    }

                
                }else{                
                                var flag = user.Quiz[index].Questions.findIndex(x => x.que == body.que);
                                console.log(flag);

                                if(flag == -1){

                                        
                                    const sss = user.Quiz[index].Questions ; 

                                    sss.unshift({

                                        que : info.Quiz[index_admin].Questions[flag_admin].que ,  
                                        option1 : info.Quiz[index_admin].Questions[flag_admin].option1,
                                        option2 : info.Quiz[index_admin].Questions[flag_admin].option2,
                                        option3 : info.Quiz[index_admin].Questions[flag_admin].option3,
                                        option4 : info.Quiz[index_admin].Questions[flag_admin].option4,
                                        ans : info.Quiz[index_admin].Questions[flag_admin].ans, 
                                        selected_option : body.selected_option


                                    })
                                    
                                    user.Quiz[index].Questions = sss;
                                }else{
                            

                                    user.Quiz[index].Questions[flag].que =info.Quiz[index_admin].Questions[flag_admin].que ,  
                                    user.Quiz[index].Questions[flag].option1 = info.Quiz[index_admin].Questions[flag_admin].option1,
                                    user.Quiz[index].Questions[flag].option2 = info.Quiz[index_admin].Questions[flag_admin].option2,
                                    user.Quiz[index].Questions[flag].option3 = info.Quiz[index_admin].Questions[flag_admin].option3,
                                    user.Quiz[index].Questions[flag].option4 = info.Quiz[index_admin].Questions[flag_admin].option4,
                                    user.Quiz[index].Questions[flag].ans = info.Quiz[index_admin].Questions[flag_admin].ans, 
                                    user.Quiz[index].Questions[flag].selected_option = body.selected_option

                                }
                            }
                        }
                    

                
    
          
        user.save()        
        .then((data)=>{
            console.log("Doned");
            res.status(200).send(data);
        })
        .catch((err)=>{
            console.log(err);
        });
    

    }
    })
    

})
}



scoreQuiz= (req,res)=>{
   
    Person.findOne({ _id : req.params.id } , ( err , user ) =>{

        if(err){
            console.log(err)
        }

        var index = user.Quiz.findIndex(x => x.Title_quiz === req.params.title);
        console.log(index);
        
        
        if(index == -1){
            console.log(" have not given any quiz ");
         }

        else{
            if(user.Quiz[index].Title_quiz == req.params.title){
            console.log(req.params.title);

                const end = user.Quiz[index].Questions.length;

                console.log(end);

                let score_count = 0;

                for(let i=0 ; i<end ; i++){

                    if(user.Quiz[index].Questions[i].ans == user.Quiz[index].Questions[i].selected_option){
                        
                        score_count++;
                    }

                }
                console.log(score_count);

            
                user.Quiz[index].Score_Quiz = score_count;
               
                
                


        }

    }
        
        
        user.save()        
        .then((data)=>{
            console.log("Doned");
           
           



  
            Person.findOne({ _id : req.params.id , "Quiz.Title_quiz" : req.params.title } ,
            (err, data)=>{
            if(!err){

                var ind = data.Quiz.findIndex(x => x.Title_quiz === req.params.title);
                console.log(ind);

                Person.findOne({ _id : req.params.id } , ( err , user_info ) =>{
                if(err){
                    console.log(err)
                }
                        
                    const temp = user_info.Scr_Quiz ; 
                
                    temp.unshift({

                    Status_quiz : "Done",
                    Title_quiz : data.Quiz[index].Title_quiz , 
                    Desc_quiz : data.Quiz[index].Desc_quiz ,
                    Score_Quiz : data.Quiz[index].Score_Quiz
                            
                    })
                    user_info.Scr_Quiz = temp;
                


                user_info.save()                            
                .then((info)=>{
                    console.log("Doned");

                            Person.findByIdAndUpdate({'_id':req.params.id} , {$pull: { Quiz: { Title_quiz : req.params.title }}} , (err,data)=>{

                            if(!err){
                                console.log("deleted");
                                res.status(200);
                            }else{
                                console.log(err);
                            }
                        })

                        res.status(200);
                    })
                .catch((err)=>{
                    console.log(err);
                });
            })



            res.status(200);
            }else{
            console.log(err);
            }
            })






            res.status(200).send(data.Quiz[index]);

        })
        .catch((err)=>{
            console.log(err);
        });
    })
};



updateUser = (req ,res)=>{

    const {name , email , pass , sirname , mobile_no , address} = req.body;

    Person.findByIdAndUpdate({'_id':req.params.id} , {name , email , pass , sirname , mobile_no , address} ,  {new :true}  , (err,data)=>{

        if(!err){
            
            res.status(200).send(data);
        }else{
            console.log(err);
        }
    })

   
    

};


module.exports = {
  postRegister,
  postUserLogin,

  getAllData,
  getUserData,  
  getScoredQuizData,
  getUserQuizData,
  
  updateUser,
  
  subQuestion,  
  scoreQuiz,
};
