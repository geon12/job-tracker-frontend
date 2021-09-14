import { useParams } from "react-router";
import { Link } from "react-router-dom";
import TaskCard from "./TaskCard"

function TaskContainer({jobApps}) {
    
    let { app_id } = useParams();
    const app = jobApps.find((job_app) => job_app.id.toString() === app_id)

    function populateCards() {
        return app.tasks.map((task) => <TaskCard key={task.id} task={task}/>)
    }
    return (
        <div>
            <Link to="/job_applications"><button>Back to Applications</button></Link>
            {app ? populateCards() : <div>Page is Loading</div>}
        </div>
    )
}

export default TaskContainer