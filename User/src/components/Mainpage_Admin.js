import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import LogoutIcon from '@mui/icons-material/Logout';
import { Fab } from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/mainPageAdmin.css";

function Mainpage_Admin() {

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









  return (



    <>

      


  

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
          <p className="paraColor">Create quiz</p>
          <a href="#">
            <Link to={"/create_quiz/" + id}>
              <Fab color="primary" aria-label="add">
                <AddIcon />
              </Fab>
            </Link>

          </a>
        </div>
        <div className="button2">
          <p className="paraColor">View Quizes</p>
          <a href="#">
            <Link to={"/all_quiz/" + id}>
              <Fab aria-label="edit">
                <RemoveRedEyeIcon className="eyeIcon" />

              </Fab>
            </Link>

          </a>

        </div>
        <div className="button3">
          <p className="paraColor">Update Profile</p>
          <a href="#">
            <Link to={"/Admin_Profile/" + id}>
              <Fab color="secondary" aria-label="edit">
                <EditIcon />
              </Fab>
            </Link>

          </a>



        </div>
        <div className="button4">
    <p className="paraColor">Logout</p>
    <a href="#">
      <Link to={"/adminlogin"}>
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
export default Mainpage_Admin;