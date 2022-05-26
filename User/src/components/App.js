import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { Switch , Route } from "react-router-dom";

import Register_user from "./Register_user"; 
import Register_admin from "./Register_admin"; 
import User_Login from "./User_Login"; 
import Start from "./Start"; 

import Mainpage_User from "./Mainpage_User";
import Mainpage_Admin from "./Mainpage_Admin";
import User_Profile from "./User_Profile";
import Admin_Profile from "./Admin_Profile";
import Admin_Login from "./Admin_Login";
import Create_quiz from "./Create_quiz";
import Quiz from "./Quiz";
import User_Quiz_History from "./User_Quiz_History";
import Actual_Quiz from './Actual_Quiz';
import All_Quiz from "./All_Quiz";
import View_Score from './View_Score';

function App() {

  

  return (
  <>
    <Router>
      <Switch>
          <Route path="/userlogin" exact component={User_Login} />

          <Route path="/adminlogin" exact component={Admin_Login} />
          <Route path="/create_quiz/:id" exact component={Create_quiz} />
          <Route path="/" exact component={Start} />
          <Route path="/User_Profile/:id" exact component={User_Profile} />
          <Route path="/Admin_Profile/:id" exact component={Admin_Profile} />
          <Route path="/register_user" exact component={Register_user} />
          <Route path="/register_admin" exact component={Register_admin} />
          <Route path="/mainpage_user/:id" exact component={Mainpage_User} />
          <Route path="/mainpage_admin/:id" exact component={Mainpage_Admin} />
          
          <Route path="/take_quiz/:id" exact component={Quiz} />
          
          <Route path="/user_quiz_history/:id" exact component={User_Quiz_History} />
          <Route path="/actual_quiz/:id/:Quiz_id/:user_id" exact component={Actual_Quiz} />
          
          <Route path="/all_quiz/:id" exact component={All_Quiz} />

           <Route path="/view_score/:id/:title" exact component={View_Score} />

      </Switch>
    </Router>



  </>
  );
}
export default App;
