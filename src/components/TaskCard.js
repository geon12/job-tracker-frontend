import TaskForm from "./TaskForm"
import {useState} from "react"

function TaskCard({task,setJobApps,jobApps,app}) {
    const [showEdit,setShowEdit] = useState(false)
    function updateTasks(updatedTask) {
        const updatedTasks= app.tasks.map((task) => task.id === updatedTask.id ? updatedTask : task )
        const updatedApp = {...app,tasks: updatedTasks}
        return jobApps.map((jobApp) => jobApp.id === updatedApp.id ? updatedApp : jobApp)
    }

    function removeTask(deletedTask) {
        const updatedTasks= app.tasks.filter((task) => task.id !== deletedTask )
        const updatedApp = {...app,tasks: updatedTasks}
        return jobApps.map((jobApp) => jobApp.id === updatedApp.id ? updatedApp : jobApp)
    }

    function handleShowClick() {
        setShowEdit(prevState => !prevState)
    }

    function handleEdit(data) {
        const configObj = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials:'include',
            body: JSON.stringify(data)
        }
        
        fetch(`${process.env.REACT_APP_API_URL}/tasks/${task.id}`, configObj)
            .then(resp => resp.json())
            .then( (resp) => {
                setJobApps(updateTasks(resp)) 
                setShowEdit(prevState => !prevState)
            })
            .catch(console.error)
    }
    function handleDelete() {
        fetch(`${process.env.REACT_APP_API_URL}/tasks/${task.id}`, {method: 'DELETE',credentials:'include'})
            .then( () => {
                setJobApps(removeTask(task.id)) 
            })
            .catch(console.error)
    }
    return (
        <div className="card card-body border-dark m-3 text-center mx-5">   { 
                    showEdit ?
                        <TaskForm fetch={handleEdit} task={task}/> :
                    <div>
                        <h1>{task.name}</h1>
                        <h2>Category: {task.category}</h2>
                        <h2>Date: {`${task.date.slice(5,7)}-${task.date.slice(8,10)}-${task.date.slice(0,4)}`}</h2>
                        <h2>Completed? - {task.completed ? "Yes" : "No"}</h2>
                    </div>
                }
                <div>
                    <button className="btn btn-secondary btn-sm m-2" onClick={handleDelete}>Delete</button>
                    <button className="btn btn-secondary btn-sm m-2" onClick={handleShowClick}>{showEdit ? "Close" : "Edit"}</button>
                </div>
        </div>
    )
}

export default TaskCard