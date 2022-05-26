import React , {useEffect, useState} from "react";
import {  Link , useParams } from "react-router-dom";
import axios from "axios";
import "../styles/viewScore.css";

import Button from '@mui/material/Button';


function View_Score(){

        const {id} = useParams();
        const {title} = useParams();
        

       

 const [score , setScore]=useState({
  Score_Quiz:"" , arrdata:[] ,Title_quiz:""
});



 function Load(){
    
   
    axios.get("/score_quiz/"+id+"/"+title)
    .then((res)=> {
       console.log(res.data);
      setScore({ 
          Title_quiz : res.data.Title_quiz ,
          Score_Quiz : res.data.Score_Quiz,
        arrdata : res.data.Questions
      })
     
  
    })
    .catch((err)=>{
        console.log(err); 
      })
    }
  
  
  useEffect(()=>{
    Load();
  }, []
)








return(



  <>
  
   <div>


<div className="Content">
<div class="card border-dark mb-3" >

<div>
  
  
<div class="container"> <center><h4>Title : <b>{score.Title_quiz}</b></h4></center></div>
<div className="container">
  <center><h1>Score of Quiz : <b>{score.Score_Quiz}</b></h1></center>
</div>

  {score.arrdata.map((sub)=>{
      return(
      <div key={sub._id}>

       
     
      <div id="inner-card" class="shadow p-3 mb-5 bg-white rounded card border-dark mb-3">
      <div class="card-header"><b>Question : </b>{sub.que}</div>

      <div class="card-body text-dark">
       
          <form>
              <p class="card-text"><b value={sub.option1}   />(A) : <strong>{sub.option1}</strong></p>
              <p class="card-text"><b value={sub.option2}  />(B) : <strong>{sub.option2}</strong></p>
              <p class="card-text"><b value={sub.option3}  />(C) : <strong>{sub.option3}</strong></p>
              <p class="card-text"><b value={sub.option4}  />(D) : <strong>{sub.option4}</strong></p>
          </form>
          
          
              <br/>
         
              <h5 class="card-title"><b>Your Answer: </b>{sub.selected_option}</h5> 
          <br/>
          <h5 class="card-title"><b>Correct Answer : </b>{sub.ans}</h5>
      </div>
      </div>
      
              
       </div>

      )
 
 })}
 

{/* <b>Score : {score.Score_Quiz}</b> */}


                        <Link to={"/mainpage_user/"+id}>
                            <center><Button  variant="outlined" value="Back" id="Aditya" size="medium">Go To Home Page</Button></center>
                        </Link> </div>

</div> 
</div>
</div> 


  </>
)

}
export default View_Score;



