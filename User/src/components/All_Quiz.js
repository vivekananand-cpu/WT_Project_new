import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "../styles/allQuiz.css";
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Fab } from "@mui/material";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Button from '@mui/material/Button';



function All_Quiz() {
  const { id } = useParams();

  const [info, setInfo] = useState({
    Title_Quiz: "", arrdata:[]
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



    axios.get("/get_specific_admin/" + id)

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




  function deletequiz(post_id, Quiz_id) {

    axios.delete("/delete_adminquiz_permanent/" + post_id + "/" + Quiz_id)
      .then(data => {
        console.log(data)

      }).catch((err) => {
        console.log(err);
      })


  }


  function Updatequiz(post_id, Quiz_id) {

    axios.put("/update/" + post_id + "/" + Quiz_id)
      .then(data => {
        console.log(data);
        Load();

      }).catch((err) => {
        console.log(err);
      })




  }



  return (
    <>

      <Navbar />
      {/* <div className="navButtons container">
        <Link to={"/mainpage_admin/" + id}>
            <Button variant="outlined" size="medium" >Home</Button>
        </Link>
        <Link to={"/create_quiz/" + id}>
            <Button variant="outlined" size="medium" >Create Quiz</Button>
        </Link>
        <Link to={"/Admin_Profile/" + id}>
          <button className="btn btn-primary" id="update-but">Update Profile</button>
        </Link>
        <Link to={"/adminlogin"}>
          <button className="header btn btn-primary"> LogOut</button>


        </Link>





      </div> */}
      <div className="navbutContaiiner container">
        
        <div className="navButtons shadow p-3 mb-5 bg-white rounded">
          <Link to={"/mainpage_admin/" + id}>
            <Button variant="outlined" size="medium" >Home</Button>
  
  
          </Link>
          <Link to={"/create_quiz/" + id}>
            <Button  className="acqbutton" variant="outlined" size="medium" >Create Quiz</Button>
          </Link>
          <Link to={"/Admin_Profile/" + id}>
            <Button variant="outlined" size="medium" >Update Profile</Button>
          </Link>
          <Link to={"/adminlogin"}>
            <Button variant="outlined" color="error"> LogOut</Button>        </Link>
  
        </div>
        </div>
      <div className="container mainDivofAllQuizes">
        <div className="shadow p-3 mb-5 bg-white rounded  lefDiv">
          <h4 className="aqHeading"> Current Quizes To Do</h4>
          <div class="list-group">

            <div class="list-group-item list-group-item-action list-group-item-success">
              {info.arrdata.map((post, pos) => {
                return (
                  <div className="dataDiv">


                    <div>
                      {post.Quiz.map((sub, so) => {
                        return (

                          <div className="aqData container">

                            <p className="tableText">{sub.Title_quiz}</p>
                            <Fab className="delIconofCq" size="small" aria-label="edit">
                              <DeleteIcon id="del-but" onClick={() => Updatequiz(post._id, sub._id)} />

                            </Fab>
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
          <h4 className="aqHeading"> Deleted Quizes</h4>
          <div class="list-group">

            <div class="list-group-item list-group-item-action list-group-item-danger">
              {info.arrdata.map((post, pos) => {
                return (
                  <div className="dataDiv">


                    <div>
                      {post.Del_Quiz.map((sub, so) => {
                        return (
                          <div >

                            <div className="aqData container">

                              <p className="tableText">{sub.Title_quiz}</p>

                              <Fab className="delIconofCq" size="small" aria-label="edit">

                                <DeleteForeverIcon id="del-but" onClick={() => deletequiz(post._id, sub._id)} />

                              </Fab>
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
export default All_Quiz;
