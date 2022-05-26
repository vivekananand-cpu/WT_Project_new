var Person = require("../src/model/User_model");
const Admin = require("../src/model/Admin_model");



postAdminLogin =  (req,res)=>{

    const { email , pass } = req.body;

    if(!email || !pass ){
        return res.status(200).send("Plz Fill The all fields ");
    }
    else{
    Admin.findOne({ email : email , pass : pass })
    .then((userExist)=>{

        if(userExist){
            console.log(userExist.id);
            Admin.findById(userExist.id , (err , doc)=>{
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


getAdminData = (req,res)=>{
    
    console.log(req.params.id);
   
    Admin.findById(req.params.id , (err,doc)=>{
        if(!err){
            console.log(doc);
            res.send(doc);
        }else{
            console.log(err)
        }
    })
 
};


getQuizData = (req,res)=>{
    
    Admin.find({ Quiz: {$elemMatch: { Status_quiz : "open"  } }} , (err,data)=>{
        if(!err){
            console.log(data);
            res.send(data);
        }else{
            console.log(err)
        }
    })
   
};


getSpecificQuiz = (req,res)=>{
   
    Admin.findById({'_id':req.params.id} , { Quiz: {$elemMatch: { _id : req.params.Quiz_id }}} , (err,data)=>{

        if(!err){
            console.log(data.Quiz[0].Title_quiz);
            res.send(data);
        }else{
            console.log(err)
        }
    
    })

    
   
};


getQuestionData = (req,res)=>{
    const body = req.body;
    Admin.find({ Quiz: {$elemMatch: {  Questions : { Title_quiz : body.Title_quiz } } }} , (err,data)=>{
        if(!err){
            console.log(data);
            res.send(data);
        }else{
            console.log(err)
        }
    })
   
};

changeStatus =  (req,res)=>{
    



       
    Admin.findOneAndUpdate({ _id : req.params.post_id , "Quiz._id" : req.params.Quiz_id } ,
                             { '$set' : { 'Quiz.$.Status_quiz' : 'Close'}} ,(err, data)=>{
        if(!err){

                var index = data.Quiz.findIndex(x => x.id === req.params.Quiz_id);
                console.log(index);
            
                Admin.findOne({ _id : req.params.post_id } , ( err , user ) =>{
                    if(err){
                        console.log(err)
                    }
                            
                        const temp = user.Del_Quiz ; 
                    
                        temp.unshift({

                        Status_quiz : "Done",
                        Title_quiz : data.Quiz[index].Title_quiz , 
                        Desc_quiz : data.Quiz[index].Desc_quiz 
                                
                        })
                        user.Del_Quiz = temp;
                    
                
                
                 user.save()                            
                .then((data)=>{
                        console.log("Doned");

                                Admin.findByIdAndUpdate({'_id':req.params.post_id} , {$pull: { Quiz: { _id : req.params.Quiz_id }}} , (err,data)=>{

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
};




QuestionEntry = (req,res)=>{

    const body=req.body;
    Admin.findOne({ _id : req.params.id } , ( err , user ) =>{

        if(err){
            console.log(err)
        }

        var index = user.Quiz.findIndex(x => x.Title_quiz === body.title);
        console.log(index);
        
        if(index == -1){
            index=0;
        
           
            const sender = user.Quiz ; 

            sender.unshift({
                
                Title_quiz : body.title 
    
            })
    
            user.Quiz = sender;
    
        
            const sss = user.Quiz[index].Questions ; 

            sss.unshift({

                que : body.que ,  
                option1 : body.option1,
                option2 : body.option2,
                option3 : body.option3,
                option4 : body.option4,
                ans : body.ans, 

            })
            
            user.Quiz[index].Questions = sss;



    
    
        }

        else{
            if(user.Quiz[index].Title_quiz == body.title){
            console.log(body.title);

                console.log(user.Quiz[index].Questions);

                const sss = user.Quiz[index].Questions ; 

                sss.unshift({

                    que : body.que , 
                    option1 : body.option1,
                    option2 : body.option2,
                    option3 : body.option3,
                    option4 : body.option4, 
                    ans : body.ans, 

                })
                
                user.Quiz[index].Questions = sss;


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
    })
};


quizEntry = (req,res)=>{

    const body=req.body;
   
    Admin.findOne({ _id : req.params.id } , ( err , user ) =>{

        if(err){
            console.log(err)
        }
        
        const sender = user.Quiz ; 

        sender.unshift({
            Status_quiz : "open" ,
            
            Title_quiz : body.Title_quiz ,  
            
            Desc_quiz : body.Desc_Quiz, 

        })

        user.Quiz = sender;





       
        user.save()        
        .then((data)=>{
            console.log("Doned");
            res.status(200).send(data);
        })
        .catch((err)=>{
            console.log(err);
        });
    })
};


deleteAdminPermanent = (req,res)=>{

  
    Admin.findByIdAndUpdate({'_id':req.params.id} , {$pull: { Del_Quiz: { _id : req.params.Quiz_id }}} , (err,data)=>{

        if(!err){
            
            res.status(200).send(data);
        }else{
            console.log(err);
        }
    })

};


updateAdmin = (req ,res)=>{

    const {name , email , pass , sirname , mobile_no , address} = req.body;

   
    Admin.findByIdAndUpdate({'_id':req.params.id} , {name , email , pass , sirname , mobile_no , address} ,  {new :true}  , (err,data)=>{

        if(!err){
            
            res.status(200).send(data);
        }else{
            console.log(err);
        }
    })


    

};

module.exports = {
  postAdminLogin,

  getAdminData,
  getSpecificQuiz,
  getQuizData,
  getQuestionData,
  
  QuestionEntry,
  quizEntry,
  changeStatus,
  
  deleteAdminPermanent,
  
  updateAdmin,
  
};
