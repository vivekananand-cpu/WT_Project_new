import React, { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import "../styles/actualQuiz.css"
import CountDown from "./CountDown";



function Actual_Quiz() {
  const [selectedValue, setSelectedValue] = React.useState('a');
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'size-radio-button-demo',
    inputProps: { 'aria-label': item },
  });

  const { id } = useParams();
  const { Quiz_id } = useParams();
  const { user_id } = useParams();

  const history = useHistory();

  const [user, setUser] = useState({
    email: "", pass: "", name: ""
  });

  const [info, setInfo] = useState({
    Title_Quiz: "", selected_option: "", que: "", option1: "", option2: "", option3: "", option4: "", ans: "", arrdata: []
  });

  const [data, setData] = useState({
    Title_quiz: "", selected_option: "", que: "", option1: "", option2: "", option3: "", option4: "", ans: "", arrdata: []
  });



  const onC = (event) => {

    const name = "selected_option"
    const value = event.target.getAttribute("dataid").split("-")[1]

    const que = "que"
    const que_value = event.target.getAttribute("dataid").split("-")[0]

    const title = "Title_quiz"
    const title_value = event.target.getAttribute("dataid").split("-")[2]

    console.log(value);

    setData({
      ...data, [name]: value, [que]: que_value, [title]: title_value

    })


  }


  function Load() {

    axios.get("/get-specific-quiz/" + id + "/" + Quiz_id)
      .then((res) => {
        console.log(res);
        setInfo({
          arrdata: res.data.Quiz
        })

      })
      .catch((err) => {
        console.log(err);
      })



    axios.get("/get_specific_user/" + user_id)

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



  function UpdateData() {

    axios.put("/sub_que/" + user_id + "/" + id + "/" + Quiz_id, data)

      .then((res) => {
        console.log(res);

      })
      .catch((err) => {
        console.log(err);
      })
  }


  function Score_Quiz(event) {

    const aa = event.target.getAttribute("dataid").split("-")[0]

    history.push("/view_score/" + user_id + "/" + aa)

  }



  return (



    <>

      {/* <div>

  <nav class="navbar navbar-expand-lg navbar-light fixed-top">
		<div class="container">
		 <b> Welcome {user.email}</b> 
	   <div class="collapse navbar-collapse" id="navbarSupportedContent">
                
				<ul class="navbar-nav ml-auto">
					
					  <li class="nav-item">					
              <Link to={"/mainpage_user/"+user_id}>
                <button  className="header btn btn-primary"> Home </button>
              </Link>                      
					  </li>
      		  <li>		
              <Link to={"/user_quiz_history/"+user_id}>
                 <button  className="header btn btn-primary">View My Quizs</button>
              </Link>
      			</li>
		
             <li>
               <Link to={"/User_Profile/"+user_id}>
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


<div className="Content">
<div class="card border-dark mb-3" >

{info.arrdata.map((post , pos)=>{
return(
<div>
  
  
<div class="card-header"> <b>Title Of Quiz is : </b>{post.Title_quiz}</div>


  {post.Questions.map((sub)=>{
      return(
      <div key={sub._id}>

       
     
      <div class="card border-dark mb-3 question">
      <div class="card-header"><b>Question : </b>{sub.que}</div>

      <div class="card-body text-dark">
       
          <form>
              <p class="card-text"><input type="radio" name="selected_option" value={sub.option1} onClick={onC} dataid = {`${sub.que}-${sub.option1}-${post.Title_quiz}`} key={`${sub.que}-${sub.option1}-${post.Title_quiz}`}  /> <strong>{sub.option1}</strong></p>
              <p class="card-text"><input type="radio" name="selected_option" value={sub.option2} onClick={onC} dataid = {`${sub.que}-${sub.option2}-${post.Title_quiz}`} key={`${sub.que}-${sub.option2}-${post.Title_quiz}`} /> <strong>{sub.option2}</strong></p>
              <p class="card-text"><input type="radio" name="selected_option" value={sub.option3} onClick={onC} dataid = {`${sub.que}-${sub.option3}-${post.Title_quiz}`} key={`${sub.que}-${sub.option3}-${post.Title_quiz}`} /> <strong>{sub.option3}</strong></p>
              <p class="card-text"><input type="radio" name="selected_option" value={sub.option4} onClick={onC} dataid = {`${sub.que}-${sub.option4}-${post.Title_quiz}`} key={`${sub.que}-${sub.option4}-${post.Title_quiz}`} /> <strong>{sub.option4}</strong></p>
          </form>
     
          <br/>
          <button  onClick={()=>{UpdateData()}} className="btn btn-primary">Submit</button>
         
      </div>
      </div>
                  
       </div>

      )
 
 })}
 

 <div class="class-footer">

  <button onClick={Score_Quiz} dataid = {`${post.Title_quiz}`} key={`${post.Title_quiz}`} className="btn btn-primary">Submit Quiz</button>

</div>
</div>

)
})}


</div> 
</div>
</div>
 */}

      {/* <Navbar /> */}
        
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
      {/* <CountDown /> */}

      <div className="container card border-dark mb-3">

        {info.arrdata.map((post, pos) => {
          return (
            <div>


              <div className="container">
                <div className="h1 aqHeading">{post.Title_quiz}
                </div>
              </div>


              {post.Questions.map((sub) => {
                return (
                  <div key={sub._id}>



                    <div class="shadow p-3 mb-5 bg-white rounded">
                      <div class="aqQutionHeading"><b className="h5">Question : </b>{sub.que}</div>

                      <div class="card-body text-dark">

                        <form>
                         
                          
          <form>
              <p class="card-text"><input type="radio" name="selected_option" value={sub.option1} onClick={onC} dataid = {`${sub.que}-${sub.option1}-${post.Title_quiz}`} key={`${sub.que}-${sub.option1}-${post.Title_quiz}`}  /> <strong>{sub.option1}</strong></p>
              <p class="card-text"><input type="radio" name="selected_option" value={sub.option2} onClick={onC} dataid = {`${sub.que}-${sub.option2}-${post.Title_quiz}`} key={`${sub.que}-${sub.option2}-${post.Title_quiz}`} /> <strong>{sub.option2}</strong></p>
              <p class="card-text"><input type="radio" name="selected_option" value={sub.option3} onClick={onC} dataid = {`${sub.que}-${sub.option3}-${post.Title_quiz}`} key={`${sub.que}-${sub.option3}-${post.Title_quiz}`} /> <strong>{sub.option3}</strong></p>
              <p class="card-text"><input type="radio" name="selected_option" value={sub.option4} onClick={onC} dataid = {`${sub.que}-${sub.option4}-${post.Title_quiz}`} key={`${sub.que}-${sub.option4}-${post.Title_quiz}`} /> <strong>{sub.option4}</strong></p>
          </form>

                        </form>

                        <br />

                        <Button onClick={() => { UpdateData() }} variant="outlined" size="small">
                          Save
                        </Button>

                      </div>
                    </div>

                  </div>

                )

              })}


              <div class="class-footer">
                <center>
                <button onClick={Score_Quiz} dataid={`${post.Title_quiz}`} key={`${post.Title_quiz}`} className="btn btn-primary">Submit Quiz</button>
                </center>
              </div>
            </div>

          )
        })}


      </div>
      <Footer />

    </>
  )

}
export default Actual_Quiz;



