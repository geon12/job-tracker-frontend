import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useState } from "react";
import TaskCard from "./TaskCard"
import TaskForm from "./TaskForm";

function TaskContainer({jobApps,setJobApps}) {
    
    let { appId } = useParams();
    const app = jobApps.find((jobApp) => jobApp.id.toString() === appId)

    const [showForm,setShowForm] = useState(false)

    function handleClick() {
        setShowForm(prevState => !prevState)
    }
    
    function populateCards() {
        return app.tasks.map((task) => <TaskCard key={task.id} task={task} setJobApps={setJobApps} jobApps={jobApps} app={app}/>)
    }
    function updateTasks(newTask) {
        app.tasks.push(newTask)
        return jobApps.map((jobApp) => jobApp.id === app.id ? app : jobApp)
    }

    function addTask(data) {
        const configObj = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            credentials:'include',
            body: JSON.stringify(data)
        }
        fetch(`${process.env.REACT_APP_API_URL}/tasks`,configObj)
            .then((resp) => {
                if (resp.ok) {
                    resp.json().then(resp => {
                        
                        setJobApps(updateTasks(resp))
                        setShowForm(prevState => !prevState)
                    })
                }
                else {
                    resp.json().then((resp) => resp.errors)
                }
            })
    }
    return (
        <div>
            <Link to="/job_applications"><button>Back to Applications</button></Link>
            {showForm ? <TaskForm fetch={addTask} appId={appId}/> : null}
            <button onClick={handleClick}>{showForm ? "Close Form" : "Add Task"}</button>
            {app ? populateCards() : <div>Page is Loading</div>}
        </div>
    )
}

export default TaskContainer