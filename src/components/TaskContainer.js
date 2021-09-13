import TaskCard from "./TaskCard"

function TaskContainer({app}) {

    function populateCards() {
        return app.tasks.map((task) => <TaskCard task={task}/>)
    }
    return (
        <div>
            {app ? populateCards() : <di>Page is Loading</di>}
        </div>
    )
}

export default TaskContainer