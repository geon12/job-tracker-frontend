import { useState,useEffect } from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import Profile from "./components/Profile";
import SignUp from "./components/SignUp";
import JobAppsContainer from "./components/JobAppsContainer";
import TaskContainer from "./components/TaskContainer";
import ContactContainer from "./components/ContactContainer";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  const [user, setUser] = useState(null)
  const [jobApps, setJobApps] = useState(null)
  
  useEffect( () => {
    fetch(`${process.env.REACT_APP_API_URL}/profile`,{credentials:'include'})
      .then((resp) => {
        if (resp.ok) {
          resp.json().then((resp)=>{
            setUser(resp)
            
          })
        }
      })
  },[])

  useEffect( () => {
    fetch(`${process.env.REACT_APP_API_URL}/job_applications`,{credentials:'include'})
    .then((resp) => {
        if (resp.ok) {
        resp.json().then((resp) => {
                //console.log(resp)
                setJobApps(resp)
            })
        }
    })
},[])

  return (
    <Router>
      <NavBar user={user} setUser={setUser}/>
      <Switch>
        
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/profile">
            {user ? <Profile user={user} setUser={setUser}/> : <div>Profile is Loading</div>}
          </Route>
          <Route exact path="/login">
            <Login setUser={setUser}/>
          </Route>
          <Route exact path="/signup">
            <SignUp setUser={setUser}/>
          </Route>
          <Route exact path="/job_applications">
            {user && jobApps ? <JobAppsContainer jobApps={jobApps} setJobApps={setJobApps}/> : <div>Applications are Loading</div>}
          </Route>
          <Route exact path="/job_applications/:appId/tasks">
            {user && jobApps ? <TaskContainer jobApps={jobApps} setJobApps={setJobApps}/> : <div>Task is Loading</div>}
          </Route>
          <Route exact path="/job_applications/:appId/contacts">
            {user && jobApps ? <ContactContainer jobApps={jobApps} setJobApps={setJobApps}/> : <div>Contact is Loading</div>}
          </Route>
        
      </Switch>
    </Router>
  );
}

export default App;