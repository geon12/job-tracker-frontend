import {Link} from "react-router-dom";

function Home() {

    return (
        <div>
            <h1>Track Your Job Applications</h1>
            <Link to="/signup"><button>Try It Out</button></Link>
        </div>
    )
}

export default Home