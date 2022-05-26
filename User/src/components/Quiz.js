import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from '@mui/material/Button';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import "../styles/quiz.css";
import { Fab } from "@mui/material";



function Quiz() {

  const { id } = useParams();

  const [info, setInfo] = useState({
    Title_Quiz: "", arrdata: []
  });


  const [user, setUser] = useState({
    email: "", pass: "", name: ""
  });


  function Load() {

    axios.get("/get_Quiz/" + id)
      .then((res) => {
        console.log(res);
        setInfo({
          arrdata: res.data
        })
      })
      .catch((err) => {
        console.log(err);
      })



    axios.get("/get_specific_user/" + id)

      .then((res) => {
        console.log(res);
        setUser(res.data);

      })
      .catch((err) => {
        console.log(err);
      })
  }

  useEffect(() => {
    Load();
  }, []
  )
  return (



    <>

      {/* <div>
      


        <nav class="navbar navbar-expand-lg navbar-light fixed-top">
		<div class="container">
		 <b> Welcome {user.name}</b> 
	   <div class="collapse navbar-collapse" id="navbarSupportedContent">
                
				<ul class="navbar-nav ml-auto">
					
					  <li class="nav-item">					
              <Link to={"/mainpage_user/"+id}>
                <button  className="header btn btn-primary"> Home </button>
              </Link>                      
					  </li>
      		  <li>		
              <Link to={"/user_quiz_history/"+id}>
                 <button  className="header btn btn-primary">View My Quizs</button>
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
	</nav>
	<div class="carousel slide actual" data-ride="carousel" id="carouselExampleIndicators">
    
    {info.arrdata.map((post , pos)=>{
    return(
    <div>
        
        <div>
        {post.Quiz.map((sub , so)=>{
            return(
        <div className="card">                    
            <h6 className="card-header"><p> Title of quiz <b> {sub.Title_quiz}</b></p></h6>
                    <div className="card-body">
                        
                        <p>description About Quiz : <h5>{sub.Desc_quiz}</h5></p>
                    
                        <Link to={"/actual_quiz/"+post._id+"/"+sub._id +"/"+id}>
                                <button  className="btn btn-primary" id="update-but">Start</button>
                        </Link> 

                    </div>                                
        </div>

            )

        })}
        </div>

    </div>
    )
    })
    }



</div> 
</div> */}

      <Navbar />
      <div className="navbutContaiiner container">

        <div className="navButtons shadow p-3 mb-5 bg-white rounded">
          <Link to={"/mainpage_user/" + id}>
            <Button variant="outlined" size="medium" >Home</Button>


          </Link>
          <Link to={"/user_quiz_history/" + id}>
            <Button variant="outlined" size="medium" >Veiw my Quizes</Button>
          </Link>
          <Link to={"/User_Profile/" + id}>
            <Button variant="outlined" size="medium" >Update Profile</Button>
          </Link>
          <Link to={"/userlogin"}>
            <Button variant="outlined" color="error"> LogOut</Button>        </Link>

        </div>
      </div>
      <div className="quizMainContainer container ">
        {info.arrdata.map((post, pos) => {
          return (
            <div>

              <div>
                {post.Quiz.map((sub, so) => {
                  return (
                    <div className="userQuizContainer shadow p-3 mb-5 bg-white rounded card border-dark mb-1">
                      <h6 className="quizHeading"><h1>{sub.Title_quiz}</h1></h6>


                      <p className="qdesc">description About Quiz : <h5>{sub.Desc_quiz}</h5></p>
                   
                      <Link to={"/actual_quiz/" + post._id + "/" + sub._id + "/" + id}>
                      <Button id="update-but"  variant="contained" color="success">
                        Start
                      </Button>
                    </Link>
                    
                      


                    </div>

                  )

                })}
              </div>

            </div>
          )
        })
        }

      </div>
      <Footer />

    </>
  )

}
export default Quiz;