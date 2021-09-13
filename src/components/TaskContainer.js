import TaskCard from "./TaskCard"

function TaskContainer({app}) {

    function populateCards() {
        return app.tasks.map((task) => <TaskCard task={task}/>)
    }
    return (
        <div>
            {app ? populateCards() : <div>Page is Loading</div>}
        </div>
    )
}

export default TaskContainer