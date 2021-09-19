import {Link} from "react-router-dom";
import LogOut from "./LogOut";
import './styles/NavBar.css'

function NavBar({user, setUser}) {

    
    return (
        <nav className="navbar navbar-expand-lg">
                    <Link className="nav-link nav-item navbar-brand" to="/">JobTracker</Link>
                {user ?  
                    <>
                        
                            <Link className="nav-link nav-item" to="/profile">Profile</Link>
                            <Link className="nav-link nav-item" to="/job_applications">Job Applications</Link>
                            <LogOut className="nav-item" setUser={setUser}/>
    
                    </> :
                        <Link className="nav-link nav-item" to="/login"> 
                            <button>Login</button>
                        </Link>
                    }
        </nav>
    )
}

export default NavBar