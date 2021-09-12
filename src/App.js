import { useState,useEffect } from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import Profile from "./components/Profile";
import SignUp from "./components/SignUp";

function App() {
  const [user, setUser] = useState(null)
  useEffect( () => {
    fetch(`${process.env.REACT_APP_API_URL}/profile`)
      .then((resp) => {
        if (resp.ok) {
          resp.json().then(setUser)
        }
      })
  },[])

  function test() {
    fetch(`${process.env.REACT_APP_API_URL}/profile`)
      .then((resp) => {
        if (resp.ok) {
          resp.json().then(console.log)
        }
      })
  }
  return (
    <div>
      <Home />
      {user ? <Profile user={user}/> : <div>Page is Loading</div>}
      <Login setUser={setUser}/>
      <button onClick={test}>Test</button>
      <SignUp setUser={setUser}/>
    </div>
  );
}

export default App;