import { useState,useEffect } from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import LogOut from "./components/LogOut";
import Profile from "./components/Profile";
import SignUp from "./components/SignUp";
import JobAppsContainer from "./components/JobAppsContainer";

function App() {
  const [user, setUser] = useState(null)
  const [jobApps,setJobApps] = useState(null)
  useEffect( () => {
    fetch(`${process.env.REACT_APP_API_URL}/profile`,{credentials:'include'})
      .then((resp) => {
        if (resp.ok) {
          resp.json().then((resp)=>{
            setUser(resp)
            setJobApps(resp.job_applicatins)
          })
        }
      })
  },[])

  return (
    <div>
      <Home />
      {user ? <Profile user={user}/> : <div>Page is Loading</div>}
      <Login setUser={setUser}/>
      <SignUp setUser={setUser}/>
      {user ? <JobAppsContainer jobApps={jobApps}/> : <div>Page is Loading</div>}
      <LogOut setUser={setUser}/>
    </div>
  );
}

export default App;