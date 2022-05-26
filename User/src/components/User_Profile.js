import React , {useState , useEffect} from "react";
import {  useParams , Link , useHistory } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "../styles/userProfile.css"
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import Button from '@mui/material/Button';



function User_Profile(){

  const history = useHistory();

    const { id }=useParams();

        const [user , setUser] = useState({
            name:"" ,  email : "" , pass :"" , sirname:"" , mobile_no : "" , address: "" 
        
        });
        
        let name,value ;
        
        const handleInputs = (e) => {
        console.log(e);
        name=e.target.name;
        value=e.target.value;
        
        setUser({ ...user , [name]:value});
        }
        
            
        function Loaddata(){
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
            Loaddata();
        } , []);

 
           
        function UpdateData(e){
            e.preventDefault();

            axios.put("/update_user/"+id , user)

            .then((res)=>{
                console.log(res);
                setUser(res.data);
                window.alert("Information updated Successfully");

                history.push("/mainpage_user/"+id);


            })
            .catch((err)=>{
                console.log(err);
            })
        }



    return(
      <> 
      
{/* 
    <div className="container" >
     <form method="post" onSubmit={(e)=>UpdateData(e)}>
       
       <div>
       
         <input type="text" onChange={handleInputs} required="true" value={user.name} placeholder="enter your name" name="name" />
         <input type="text" onChange={handleInputs} required="true" value={user.sirname} placeholder="enter your sirname" name="sirname" />
       
       
       
         <input type="email" onChange={handleInputs} required="true" value={user.email} placeholder="enter your email" name="email" />
         <input type="number" onChange={handleInputs} required="true" value={user.mobile_no} placeholder="enter your Mobile Number" name="mobile_no" />
       
       
       
       
         <input type="text" onChange={handleInputs} required="true" value={user.address} placeholder="enter your Address" name="address" />
       
       
    
       
       
         <input  type="submit" value="Update" className="btn btn-primary" id="Aditya"/>
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
                    <h3 className="profHeading">Your Profile</h3>
                 
                    <form class="requires-validation" novalidate method="post" onSubmit={(e)=>UpdateData(e)}>

                        <div className="pInputContainer container">
                        
                           <input class="form-control" type="text" onChange={handleInputs} required="true" value={user.name} placeholder="enter your name" name="name" />
                           <input class="form-control" type="text" onChange={handleInputs} required="true" value={user.sirname} placeholder="enter your sirname" name="sirname" />


                          

                            <input class="form-control" type="email"  placeholder="E-mail Address"  onChange={handleInputs} required="true" value={user.email}  name="email" />
                           <input class="form-control" type="text" onChange={handleInputs} required="true" value={user.mobile_no} placeholder="enter your Mobile Number" name="mobile_no"  />
                           <input class="form-control" type="text" onChange={handleInputs} required="true" value={user.address} placeholder="enter your Address" name="address" />


                           

                            

                       
                        </div>

                   
              

                        <div class="ubutton form-button mt-3">
                            {/* <button id="submit" type="submit" class="btn btn-primary" id="Aditya"  value="Update">Update</button>*/} 
                            <Link to={"/mainpage_user/"+id}>
                            <Button id="submit" variant="outlined" value="Back" id="Aditya" size="medium">Back</Button>
                              </Link> 
                             <input  type="submit" value="Update" className="btn btn-primary" id="Aditya"/>

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
export default User_Profile;