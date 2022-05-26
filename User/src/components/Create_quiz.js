import { Link, useHistory } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/createQuiz.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Button from '@mui/material/Button';


function Create_quiz() {
  const { id } = useParams();
  const history = useHistory();   

  const [info , setInfo]=useState({
    Title_quiz:"" , Desc_Quiz:"" 
  });

 
  const [user , setUser]=useState({
    email:"" , pass:"" , name:""
});
  
  const [data , setData]=useState({
    title:"", que:"" , ans :"" , option1:"", option2:"", option3:"", option4:""
  });

 
  const onC = (event) =>{

    let title = "title"
    let title_value = event.target.getAttribute("dataid")
  
    setData({
      ...data , [title] : title_value
  
    })


  
    var myClock = document.getElementById('box');  
  
    var displaySetting = myClock.style.display;
  
    if (displaySetting == 'block') {
     // clock is visible. hide it
     myClock.style.display = 'none';
     // change button text
     //clockButton.innerHTML = 'Show clock';
   }
   else {
     // clock is hidden. show it
     myClock.style.display = 'block';
     // change button text
     //clockButton.innerHTML = 'Hide clock';
   }
  
    
   
  
}

const aaa = () => {

   
  var myClock = document.getElementById('box');  
  
  var displaySetting = myClock.style.display;

  if (displaySetting == 'block') {
   // clock is visible. hide it
   myClock.style.display = 'none';
   // change button text
   //clockButton.innerHTML = 'Show clock';
 }
 else {
   // clock is hidden. show it
   myClock.style.display = 'block';
   // change button text
   //clockButton.innerHTML = 'Hide clock';
 }

}
  
      function handlechange(e){
        setInfo({
          ...info , [e.target.name] : e.target.value }
        )}


        function handleInputs(e){
          setData({
            ...data , [e.target.name] : e.target.value }
          )}

        


        function PostQuestion(e){
          e.preventDefault();
    
          axios.put("/question/"+id , data)
          .then(data=>{
            console.log(data)
            
          
          }).catch((err)=>{
              console.log(err);
            })
      }  
      

    function PostData(e){
      e.preventDefault();

      axios.put("/entry/"+id , info)
      .then(data=>{
        console.log(data)
        
      
      }).catch((err)=>{
          console.log(err);
        })
  }  

/*

  function toggleClock() {
    // get the clock
    var myClock = document.getElementById('box');

    // get the current value of the clock's display property
    var displaySetting = myClock.display;

    // also get the clock button, so we can change what it says
    //var clockButton = document.getElementById('clockButton');

    // now toggle the clock and the button text, depending on current state
    if (displaySetting == 'block') {
      // clock is visible. hide it
      myClock.display = 'none';
      // change button text
      //clockButton.innerHTML = 'Show clock';
    }
    else {
      // clock is hidden. show it
      myClock.display = 'block';
      // change button text
      //clockButton.innerHTML = 'Hide clock';
    }
  }

*/


function Load(){
/*
  let navbar = document.querySelector('.cart-items-container');

  document.querySelector('#cart-btn').onclick = () =>{
      navbar.classList.toggle('active');
  }
  */
  
  axios.get("/get_que/"+id , info )
    .then((res)=> {
       console.log(res);
      setInfo(
        res.data
      )
    })
    .catch((err)=>{
        console.log(err); 
      })


      axios.get("/get_specific_admin/"+id)

        .then((res)=>{
            console.log(res);
            setUser(res.data);

        })
        .catch((err)=>{
            console.log(err);
        })


  
}

  useEffect(()=>{
    Load();
  }, []
)




  return (
    <>
           
           {/* <div className="cont">
      
      
      <form method="PUT" onSubmit={(e)=>PostData(e)}>
             <input type="text" onChange={(e)=>{handlechange(e)}} name="Title_quiz" required={true} placeholder="Enter Title Of Quiz "></input>
            <br />
             <input type="textarea" onChange={(e)=>{handlechange(e)}} name="Desc_Quiz" required={true} placeholder="Enter short description about Quiz "></input>
            <br/>
            <br/>
            <input type="submit" id="cart-btn" className="btn btn-primary" onClick={onC} dataid = {`${info.Title_quiz}`} key={`${info.Title_quiz}`} value="Attach" />
         
             
          </form>
 
        
             
            
     </div>
 
       
 
     <div class="cart-items-container" id="box" toggle="">
             
             <div class="content">
               
               
           
               <form method="post" onSubmit={(e)=>PostQuestion(e)}>
               
               
               <div className="email-div">		
                 <input type="text" className="emaill" onChange={(e)=>{handleInputs(e)}} placeholder="Question" required={true} name="que" />
               </div>
 
              <div className="option-div">		
                 <input type="text" className="emaill" onChange={(e)=>{handleInputs(e)}} placeholder="Enter Option 1" required={true} name="option1" />
               </div>
                <div className="email-div">		
                 <input type="text" className="emaill" onChange={(e)=>{handleInputs(e)}} placeholder="Enter Option 2" required={true} name="option2" />
               </div>
                <div className="email-div">		
                 <input type="text" className="emaill" onChange={(e)=>{handleInputs(e)}} placeholder="Enter Option 3" required={true} name="option3" />
               </div>
                <div className="email-div">		
                 <input type="text" className="emaill" onChange={(e)=>{handleInputs(e)}} placeholder="Enter Option 4" required={true} name="option4" />
               </div>
 
               <div className="pass-div">
                 <input type="text" className="pass-input" onChange={(e)=>{handleInputs(e)}} placeholder="Answer" required={true} name="ans" />
               </div>
               
               <div className="submit-div">
                  <input type="submit"  onClick={aaa} className="btn btn-primary"></input>
               
                 
                 
                 
               </div>
               </form>
         
             </div>
         
         
         
               
                 
             </div>
 
             
 
     </div> */}

      <Navbar />
      <div className="navbutContaiiner container">
        
      <div className="navButtons shadow p-3 mb-5 bg-white rounded">
        <Link to={"/mainpage_admin/" + id}>
          <Button variant="outlined" size="medium" >Home</Button>


        </Link>
        <Link to={"/all_quiz/" + id}>
          <Button variant="outlined" size="medium" >Veiw my Quizes</Button>
        </Link>
        <Link to={"/Admin_Profile/" + id}>
          <Button variant="outlined" size="medium" >Update Profile</Button>
        </Link>
        <Link to={"/adminlogin"}>
          <Button variant="outlined" color="error"> LogOut</Button>        </Link>

      </div>
      </div>


      <div className="container allqContainer">

        <div className="container"></div>
        <div className="qtitle shadow p-3 mb-5 bg-white rounded">
          <form method="PUT" onSubmit={(e)=>PostData(e)} >
            <h4>Enter title of a quiz</h4>
            <input class="form-control" type="text" onChange={(e)=>{handlechange(e)}} name="Title_quiz" required={true} placeholder="Enter Title Of Quiz " />
            <h6>Enter description of a quiz</h6>
            <input class="form-control" type="text"  onChange={(e)=>{handlechange(e)}} name="Desc_Quiz" required={true} placeholder="Enter short description about Quiz " />
            <div className="abutton container">
              {/* <input type="submit" id="cart-btn" className="btn btn-primary" onClick={onC} dataid={`${info.Title_quiz}`} key={`${info.Title_quiz}`} value="Attach" /> */}
              <Button  type="submit" id="cart-btn" variant="outlined" onClick={onC} dataid = {`${info.Title_quiz}`} key={`${info.Title_quiz}`} value="Attach"   color="success"> Attach</Button>     

            </div>



          </form>
        </div>

        


    

        <div className="qContainer shadow p-3 mb-5 bg-white rounded" id="box" >
          <form method="post" onSubmit={(e)=>PostQuestion(e)} >
            <h6>Enter Quetion</h6>
            <input class="form-control" type="text" onChange={(e)=>{handleInputs(e)}} placeholder="Question" required={true} name="que"  />
            <div className="container options">
              <h6>Enter Options</h6>
              <input type="text" className="form-control"  onChange={(e)=>{handleInputs(e)}} placeholder="Enter Option 1" required={true} name="option1"  />
              <input type="text" className="form-control" onChange={(e)=>{handleInputs(e)}} placeholder="Enter Option 2" required={true} name="option2" />
              <input type="text" className="form-control" onChange={(e)=>{handleInputs(e)}} placeholder="Enter Option 3" required={true} name="option3" />
              <input type="text" className="form-control"onChange={(e)=>{handleInputs(e)}} placeholder="Enter Option 4" required={true} name="option4" />
             
              <h6>Enter correct Answer</h6>
           <input type="text" className="form-control" onChange={(e)=>{handleInputs(e)}}  required={true} name="ans" placeholder="Correct Answer" />


                         </div>
            <div className="subButton">
              {/* <input type="submit" className="btn btn-primary"></input> */}
              <Button type="submit" onClick={aaa} variant="outlined"  color="success"> Submit</Button>  
              {/* onClick={() =>setShow(false)}    */}

            </div>

          </form>

        </div>
      
      </div>


      <Footer />


    </>

  )

}
export default Create_quiz;

