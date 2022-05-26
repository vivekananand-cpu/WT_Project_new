import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from '@mui/material/Button';



function User_Quiz_History() {

  const { id } = useParams();

  const [info, setInfo] = useState({
    Title_Quiz: "", arrdata: []
  });


  const [user, setUser] = useState({
    email: "", pass: "", name: ""
  });


  function Load() {

    axios.get("/get_user_Quiz/" + id)
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

      {/* <nav class="navbar navbar-expand-lg navbar-light fixed-top">
		<div class="container">
		 <b> Welcome {user.email}</b> 
	   <div class="collapse navbar-collapse" id="navbarSupportedContent">
                
				<ul class="navbar-nav ml-auto">
					
            <li>		
              <Link to={"/mainpage_user/"+id}>
                 <button  className="header btn btn-primary">Home</button>
              </Link>
      			</li>
					  <li class="nav-item">					
              <Link to={"/take_quiz/"+id}>
                <button  className="header btn btn-primary"> Take Quiz</button>
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

  <div className="table">

  <table>
  <tr>
    <th> 
      
          <b>My Current Quizes To Do</b>
      
    </th>
    
    <th>
      
          <b>My Submmited Quizes</b>
      
    </th>
  </tr>
  <tr>
  <td>
     
	  <div class="carousel slide" data-ride="carousel" id="carouselExampleIndicators">

    {info.arrdata.map((post , pos)=>{
    return(
    <div>
        <div>
        {post.Quiz.map((sub , so)=>{
            return(
              <div className="card">
                               
                    <b className="card-header">{post.name}</b>      
                    <div className="card-body">
                        <p> Title of quiz </p><b >{sub.Title_quiz}</b>
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
  </td>
  <td>     
      
           
	<div class="carousel slide" data-ride="carousel" id="carouselExampleIndicators">
 
    {info.arrdata.map((post , pos)=>{
    return(
    <div>
        
        <div>
        {post.Scr_Quiz.map((sub , so)=>{
            return(
              <div className="card">
          
                    <b className="card-header">{post.name}</b>
                    <div className="card-body">
                        <p> Title of quiz <b >{sub.Title_quiz}</b></p>
                        <p>Marks You Got : <b >{sub.Score_Quiz}</b> </p>
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

</td>
 </tr>
</table>
</div> */}

      <Navbar />
      <div className="navbutContaiiner container">

        <div className="navButtons shadow p-3 mb-5 bg-white rounded">
          <Link to={"/mainpage_user/" + id}>
            <Button variant="outlined" size="medium" >Home</Button>


          </Link>
          <Link to={"/take_quiz/"+id}>
            <Button variant="outlined" size="medium" >Take Quiz</Button>
          </Link>
          <Link to={"/User_Profile/" + id}>
            <Button variant="outlined" size="medium" >Update Profile</Button>
          </Link>
          <Link to={"/userlogin"}>
            <Button variant="outlined" color="error"> LogOut</Button>        </Link>

        </div>
      </div>
      <div className="container">

      </div>
      <div className="container mainDivofAllQuizes">
        <div className="shadow p-3 mb-5 bg-white rounded  lefDiv">
          <h4 className="aqHeading"> My Current Quizes To Do</h4>
          <div class="list-group">

            <div class="list-group-item list-group-item-action list-group-item-success">

              {info.arrdata.map((post, pos) => {
                return (
                  <div>
                    <div>
                      {post.Quiz.map((sub, so) => {
                        return (
                          <div className="">

                           
                            <div className="">
                              <b >{sub.Title_quiz}</b>
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


          </div>
        </div>
        <div className="shadow p-3 mb-5 bg-white rounded   rightDiv">
          <h4 className="aqHeading">My Submmited Quizes</h4>
          <div class="list-group">

            <div class="list-group-item list-group-item-action list-group-item-danger">
              {info.arrdata.map((post, pos) => {
                return (
                  <div>

                    <div>
                      {post.Scr_Quiz.map((sub, so) => {
                        return (
                          <div className="">

                           
                            <div className="">
                              <p> <b >{sub.Title_quiz}</b></p>
                              <p>Marks You Got : <b >{sub.Score_Quiz}</b> </p>
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
          </div>
        </div>
      </div>
      <Footer />
    </>


  )

}
export default User_Quiz_History;
