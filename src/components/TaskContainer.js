import { useParams } from "react-router";
import { Link } from "react-router-dom";
import TaskCard from "./TaskCard"

function TaskContainer({jobApps,setJobApps}) {
    
    let { appId } = useParams();
    const app = jobApps.find((jobApp) => jobApp.id.toString() === appId)

    function populateCards() {
        return app.tasks.map((task) => <TaskCard key={task.id} task={task} setJobApps={setJobApps} jobApps={jobApps} app={app}/>)
    }
    return (
        <div>
            <Link to="/job_applications"><button>Back to Applications</button></Link>
            <button>Add a Task</button>
            {app ? populateCards() : <div>Page is Loading</div>}
        </div>
    )
}

export default TaskContainer