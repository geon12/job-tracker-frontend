import {Link} from "react-router-dom";
import LogOut from "./LogOut";

function NavBar({user, setUser}) {
    return (
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {user ?  
            <>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
                <li>
                    <Link to="/job_applications">Job Applications</Link>
                </li>
                <li>
                    <LogOut setUser={setUser}/>
                </li>
            </> :
            <li>
                <Link to="/login"> 
                    <button>Login</button>
                </Link>
            </li>
            }
        </ul>
    )
}

export default NavBar