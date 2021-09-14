function TaskCard({task}) {
    return (
        <div>
            <h1>{task.name}</h1>
            <h2>{task.category}</h2>
            <h2>{task.date}</h2>
            <h2>completed-{task.completed ? "yes" : "no"}</h2>
            <button>Delete</button>
            <button>Edit</button>
        </div>
    )
}

export default TaskCard