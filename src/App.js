import { useState,useEffect } from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import Profile from "./components/Profile";
import SignUp from "./components/SignUp";
import JobAppsContainer from "./components/JobAppsContainer";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  const [user, setUser] = useState(null)
  
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

  return (
    <Router>
      <NavBar user={user} setUser={setUser}/>
      <Switch>
        
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/profile">
            {user ? <Profile user={user}/> : <div>Page is Loading</div>}
          </Route>
          <Route exact path="/login">
            <Login setUser={setUser}/>
          </Route>
          <Route exact path="/signup">
            <SignUp setUser={setUser}/>
          </Route>
          <Route exact path="/job_applications">
            {user ? <JobAppsContainer /> : <div>Page is Loading</div>}
          </Route>
          
        
      </Switch>
    </Router>
  );
}

export default App;