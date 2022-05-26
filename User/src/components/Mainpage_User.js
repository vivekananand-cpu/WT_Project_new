import React , {useEffect, useState} from "react";
import {  Link , useParams } from "react-router-dom";
import axios from "axios";
import EditIcon from '@mui/icons-material/Edit';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import LogoutIcon from '@mui/icons-material/Logout';
import { Fab } from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


function Mainpage_User(){

    const {id} = useParams();

   
  const [user , setUser]=useState({
    email:"" , pass:"" , name:""
});

  
  function Load(){
    
      axios.get("/get_specific_user/"+id)

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


   
    



   





    return(



        <>
        
     
{/* 

	<nav class="navbar navbar-expand-lg navbar-light fixed-top">
		<div class="container">
		 <b> Welcome {user.email}</b> 
	   <div class="collapse navbar-collapse" id="navbarSupportedContent">
                
				<ul class="navbar-nav ml-auto">
					
					  <li class="nav-item">					
              <Link to={"/take_quiz/"+id}>
                <button  className="header btn btn-primary"> Take Quiz</button>
              </Link>                      
					  </li>
      		  <li>		
              <Link to={"/user_quiz_history/"+id}>
                 <button  className="header btn btn-primary">View My Quizes</button>
              </Link>
      			</li>
		
             <li>
               <Link to={"/User_Profile/"+id}>
                  <button  className="btn btn-primary" id="update-but">Update Profile</button>
               </Link>
             </li>
             
             <li class="nav-item">
                <Link to={"/userlogin"}>
                   <button  className="header btn btn-primary"> LogOut</button>
                </Link>            
					   </li>

				</ul>
			</div>
		</div>
	</nav> */}
  <Navbar />

<div className="greetContainerCQ container">
  <div className="userIconContainer container ">
    <div className="actualUserDiv">

      <h1 className="welAdmin ">Welcome {user.name}</h1>
    </div>

  </div>

</div>




<div className="buttonsIcons shadow p-3 mb-5 bg-white rounded">
  <div className="button1">
    <p className="paraColor">Take quiz</p>
    <a href="#">
      <Link to={"/take_quiz/"+id}>
        <Fab color="primary" aria-label="add">
          <BorderColorIcon />
        </Fab>
      </Link>

    </a>
  </div>
  <div className="button2">
    <p className="paraColor">View my Quizes</p>
    <a href="#">
      <Link to={"/user_quiz_history/"+id}>
        <Fab aria-label="edit">
          <RemoveRedEyeIcon className="eyeIcon" />

        </Fab>
      </Link>

    </a>

  </div>
  <div className="button3">
    <p className="paraColor">Update Profile</p>
    <a href="#">
      <Link to={"/User_Profile/"+id}>
        <Fab color="secondary" aria-label="edit">
          <EditIcon />
        </Fab>
      </Link>

    </a>



  </div>
  <div className="button4">
    <p className="paraColor">Logout</p>
    <a href="#">
      <Link to={"/userlogin"}>
        <Fab color="secondary" aria-label="edit">
          <LogoutIcon />
        </Fab>
      </Link>

    </a>



  </div>



</div>
<Footer />
	

        </>
    )

}
export default Mainpage_User;