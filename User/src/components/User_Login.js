import {  Link , useHistory } from "react-router-dom";
import React , {useEffect, useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function User_Login(){


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
   
   
  axios.post("/user_login" , user)
   .then(function(response){
    console.log(response);
     var user = response.data;
     if(user == "Invalid User ... Plz Create Your Account"){
        window.alert(response.data);
     }else{
        history.push("/mainpage_user/"+user._id);
     }
   
   }).catch((err)=>{
     console.log(err);
   })
   
 }
 

 return(
        <>




    <Navbar />


     

<div className="acontainer shadow p-3 mb-5 bg-white rounded">
  
<div className="adminContainer container">
  <div class="formContainer text-center" >

    <main class="form-signin">
      <form method="post" onSubmit={(e)=>PostData(e)}>

        <h1 class="h3 mb-3 fw-normal">User, Please sign in</h1>

        <div class="form-floating">
          <input type="email" class="form-control" id="floatingInput" onChange={handleInputs} placeholder="Username / Mail-Id" required={true} name="email"  />
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input type="password" class="form-control" id="floatingPassword"  onChange={handleInputs} placeholder="Password" required={true} name="pass" />
          <label for="floatingPassword">Password</label>
        </div>


       <div className="adminButtons ">
       <button class="w-100 btn btn-lg btn-primary" type="submit" id="Aditya" value="Login">Sign in</button>
        <Link to={"/register_user"}>
          <button class="w-100 btn btn-lg btn-primary" type="submit">Create Account</button>
        </Link>
       </div>


       <div className="adminButtons ">
       {/* <button class="w-100 btn btn-lg btn-primary" type="submit" id="Aditya" value="Login">Sign in</button> */}
        <Link to={"/"}>
          <button class="w-100 btn btn-lg btn-primary" type="submit">Back</button>
        </Link>
       </div>

      </form>






    </main>
  </div>
</div>

</div>
<Footer />

	
	       		    



    </>
    
    );
}
export default User_Login;