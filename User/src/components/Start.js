import {  Link , useHistory } from "react-router-dom";
import React , {useEffect, useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/start.css";


function Start(){


  const history = useHistory();
  const [user , setUser] = useState({
     email : "" , pass :"" , data:[]
 
   });

 
   let name,value ;
   
 const handleInputs = (e) => {
   console.log(e);
   name=e.target.name;
   value=e.target.value;
 
   setUser({ ...user , [name]:value});
 }
 
 
 
 function PostData(e){
   e.preventDefault();
   
   
  axios.post("/Start" , user)
   .then(function(response){
    console.log(response);
     var user = response.data;
     if(user == "Invalid User ... Plz Create Your Account"){
        window.alert(response.data);
     }else{
        history.push("/main/"+user._id);
     }
   
   }).catch((err)=>{
     console.log(err);
   })
   
 }
 

 return(
        <>
        <Navbar />





  <div className="greetContainer container">

<h1 className="startText text-center ">Get ready for an Awesome QUIZ !!! </h1>
</div>

<div className="loginButtons container ">
<Link to={"/userlogin"}>
  <button type="button" class="user btn btn-primary btn-lg">Login as User</button>
</Link>


<Link to={"/adminlogin"}>
<button type="button" class="admin btn btn-secondary btn-lg">Login as Admin</button>  
      </Link>


</div>
  {/* <Footer /> */}
	
	       		    



    </>
    
    );
}
export default Start;