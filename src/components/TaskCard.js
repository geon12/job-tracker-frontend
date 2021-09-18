import TaskForm from "./TaskForm"
import {useState} from "react"

function TaskCard({task,setJobApps,jobApps,app}) {
    const [showEdit,setShowEdit] = useState(false)
    function updateTasks(updatedTask) {
        const updatedTasks= app.tasks.map((task) => task.id === updatedTask.id ? updatedTask : task )
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
    return (
        <div>   { 
                    showEdit ?
                        <TaskForm fetch={handleEdit} task={task}/> :
                    <>
                        <h1>{task.name}</h1>
                        <h2>{task.category}</h2>
                        <h2>{`${task.date.slice(5,7)}-${task.date.slice(8,10)}-${task.date.slice(0,4)}`}</h2>
                        <h2>completed-{task.completed ? "yes" : "no"}</h2>
                    </>
                }   
                <button>Delete</button>
                <button onClick={handleShowClick}>{showEdit ? "Close" : "Edit"}</button>
                
        </div>
    )
}

export default TaskCard