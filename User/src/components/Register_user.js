import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Register_user() {




  const history = useHistory();

  const [user, setUser] = useState({
    name: "", email: "", pass: "", sirname: "", gender: "", mobile_no: "", address: "", status: "user"

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

        history.push("/userlogin");
      }).catch((err) => {
        console.log(err);
      })

  }



  return (

    <>





      <Navbar />
      <div className="container">
        <div className="shadow p-3 mb-5 bg-white rounded adminpContainer">

          <div class="form-body">
            <div class="row">
              <div class="form-holder">
                <div class="form-content">
                  <div class="form-items">
                    <h3 className="caHeading">Create Account</h3>

                    <form class="requires-validation" novalidate method="post" onSubmit={(e) => PostData(e)}>

                      <div className="pInputContainer container">

                        <input class="form-control" type="text" onChange={handleInputs} required="true" placeholder="enter your Name" name="name" />
                        <input class="form-control" type="text" onChange={handleInputs} required="true" placeholder="enter your Sirname" name="sirname" />




                        <input class="form-control" type="email" onChange={handleInputs} required="true" placeholder="enter your email" name="email" />
                        <input class="form-control" type="number" onChange={handleInputs} length='10' required="true" placeholder="enter your Mobile Number" name="mobile_no" />
                        
                        <input class="form-control" type="text" onChange={handleInputs} required="true" placeholder="enter your Address" name="address" />







                      </div>
                      <div className="genderDiv container">
                        <FormControl component="fieldset">
                          <FormLabel component="legend">Gender</FormLabel>
                          <RadioGroup
                            aria-label="gender"
                            defaultValue="female"
                            name="radio-buttons-group"
                          >
                            <FormControlLabel value="female" control={<Radio />} label="Female" onChange={handleChange} name="gender" value="FeMale" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" onChange={handleChange} name="gender" value="Male" />

                          </RadioGroup>
                        </FormControl>
                      </div>
                      <div className="container">
                        <input class="form-control" type="password" onChange={handleInputs} required="true" placeholder="enter your password" name="pass" />

                      </div>




                      <div class="ubutton form-button mt-3">
                        {/* <button id="submit" type="submit" class="btn btn-primary" id="Aditya"  value="Update">Update</button> */}
                        <input  type="submit" className="btn btn-primary" id="Aditya" value="Register" />
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
export default Register_user;