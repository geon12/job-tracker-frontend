import {useState} from "react"

function TaskForm({task,fetch,appId}) {
    const initialState = task ? {
        name: task.name ? contact.name : "",
        category: task.category ? task.category : "",
        date: task.date ? task.date : "2021-01-01",
        completed: task.completed
    } : {name: "" , category: "Other", date: "2021-01-01", completed: false,job_application_id: appId}

    const [formData, setFormData] = useState(initialState)

    function handleChange(event) {
        const name = event.target.name
        let value = event.target.value

        setFormData({
            ...formData,
            [name]: value
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        
        fetch(formData)
        
    }
    categores = ["Resume","Cover Letter","Contact", "Application","Assessment","Interview","References","Paperwork","Other"]
    return (
        <form onSubmit={handleSubmit}> 
            <input 
                type="text" 
                name="name" 
                placeholder="Name"
                value={formData.name} 
                onChange={handleChange}
            />
            <select name="category" onChange={handleChange} value={formData.category}>
                <option value="Resume">Resume</option>
                <option value="Cover Letter">Cover Letter</option>
                <option value="Contact">Contact</option>
                <option value="Application">Application</option>
                <option value="Assessment">Assessment</option>
                <option value="Interview">Interview</option>
                <option value="References">References</option>
                <option value="Paperwork">Paperwork</option>
                <option value="Other">Other</option>
            </select>
            <input type="date" name="date" min="2017-01-01" max="2099-01-01" required value={formData.date}/>
            {/* checkbox form */}
            <button type="submit">Save</button>
        </form>
    )
}

export default TaskForm