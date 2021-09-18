function TaskCard({task}) {
    return (
        <div>
            <h1>{task.name}</h1>
            <h2>{task.category}</h2>
            <h2>{`${task.date.slice(5,7)}-${task.date.slice(8,10)}-${task.date.slice(0,4)}`}</h2>
            <h2>completed-{task.completed ? "yes" : "no"}</h2>
            <button>Delete</button>
            <button>Edit</button>
        </div>
    )
}

export default TaskCard