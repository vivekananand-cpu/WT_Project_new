import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/registerAdmin.css";
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';





function Register_admin() {


  const history = useHistory();

  const [user, setUser] = useState({
    name: "", email: "", pass: "", sirname: "", gender: "", mobile_no: "", address: "", status: "Admin"

  });

  let name, value;

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });


  }

  const handleChange = event => {

    const target = event.target
    const name = target.name
    const value = target.value

    setUser({
      ...user, [name]: value
    })
  }


  function PostData(e) {
    e.preventDefault();


    axios.post("/register", user)
      .then(function (response) {

        console.log(response);
        window.alert("Done " + user.name);

        history.push("/adminlogin");


      }).catch((err) => {
        console.log(err);
      })

  }



  return (

    <>


      {/* <div id="samarth" >
      <form method="post" onSubmit={(e)=>PostData(e)}>
        
        <div>
          <input type="text" onChange={handleInputs} required="true" placeholder="enter your name" name="name" />
          <input type="text" onChange={handleInputs} required="true" placeholder="enter your sirname" name="sirname" />
        </div>
        
        <div>
          <input type="email" onChange={handleInputs} required="true" placeholder="enter your email" name="email" />
          <input type="number" onChange={handleInputs} required="true" placeholder="enter your Mobile Number" name="mobile_no" />
        </div>
        
        <div>
          <input type="text" onChange={handleInputs} required="true" placeholder="enter your Address" name="address" />
        </div>
        
        <div>
          <input type="radio"  onChange={handleChange} name="gender" value="Male" />
          <span>Male</span>
          
          <input type="radio"  onChange={handleChange} name="gender" value="FeMale" />
          <span>FeMale</span>
        </div>
        

        <div>
          <input type="password" onChange={handleInputs} required="true" placeholder="enter your password" name="pass" />
        </div>
      
        <div>
        <br />
          <input  type="submit" className="btn" id="Aditya"/>
        </div>

      </form>
     </div> */}
      <Navbar />
      <div className="container">
        <div className="shadow p-3 mb-5 bg-white rounded adminpContainer">

          <div class="form-body">
            <div class="row">
              <div class="form-holder">
                <div class="form-content">
                  <div class="form-items">
                    <h3 className="caHeading">Create Account</h3>

                    <form class="requires-validation"  method="post" onSubmit={(e) => PostData(e)}>

                      <div className="pInputContainer container">

                        <input class="form-control" type="text" onChange={handleInputs} required="true" placeholder="enter your Name" name="name" />
                        <input class="form-control" type="text" onChange={handleInputs} required="true" placeholder="enter your Sirname" name="sirname" />




                        <input class="form-control" type="email" onChange={handleInputs} required="true" placeholder="enter your email" name="email" />
                        <input class="form-control" type="number" onChange={handleInputs} required="true" placeholder="enter your Mobile Number" name="mobile_no" />
                        <input class="form-control" type="text" onChange={handleInputs} required="true" placeholder="enter your Address" name="address" />







                      </div>
                      <div className="genderDiv container">
                        <FormControl component="fieldset">
                          <FormLabel  component="legend">Gender</FormLabel>
                          <RadioGroup
                            aria-label="gender"
                            defaultValue="female"
                            name="radio-buttons-group"
                          >
                            <FormControlLabel value="female" control={<Radio />} label="Female" onChange={handleChange} name="gender" value="FeMale"  />
                            <FormControlLabel value="male" control={<Radio />} label="Male"  onChange={handleChange} name="gender" value="Male"  />
                          
                          </RadioGroup>
                        </FormControl>
                      </div>
                      <div className="container">
                      <input class="form-control" type="password" onChange={handleInputs} required="true" placeholder="enter your password" name="pass"/>

                      </div>




                      <div class="ubutton form-button mt-3">
                        <button id="submit" type="submit" class="btn btn-primary" id="Aditya"  value="Update">Update</button>
                        {/*<Button variant="outlined" value="Update" id="Aditya" size="medium">Register</Button>*/}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

      <Footer />

    </>

  );
}
export default Register_admin;