import {Link} from "react-router-dom";

function Home() {

    return (
        <div className="text-center">
            <h1 className="display-1">Track Your Job Applications</h1>
            <img className="my-2 mb-4" src="interview-image.jpg" alt="interview over zoom"/>
            <br />
            <Link to="/signup"><button className="btn btn-secondary btn-lg">Try It Out !</button></Link>
        </div>
    )
}

export default Home