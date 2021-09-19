import {Link} from "react-router-dom";

function Home() {

    return (
        <div className="text-center">
            <h1>Track Your Job Applications</h1>
            
            <Link to="/signup"><button className="text-center" >Try It Out</button></Link>
        </div>
    )
}

export default Home