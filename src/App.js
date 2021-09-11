import { useState,useEffect } from "react";
import Profile from "./components/Profile";

function App() {
  const [user, setUser] = useState(null)
  useEffect( () => {
    fetch(`${process.env.REACT_APP_API_URL}/users/11`)
      .then(resp => resp.json())
      .then(resp => setUser(resp))
  },[])

  return (
    <div>
      {user ? <Profile user={user}/> : <div>Page is Loading</div>}
    </div>
  );
}

export default App;
