import { useState } from "react"
import { Link } from "react-router-dom"
import JobApplicationForm from "./JobApplicationForm"

function JobAppCard({app,jobApps,setJobApps}) {
    const [showEdit,setShowEdit] = useState(false)
    function handleClick() {
        setShowEdit(prevState => !prevState)
    }
    function updateJobApps(updatedJobApp) {
        return jobApps.map((jobApp) => jobApp.id === updatedJobApp.id ? updatedJobApp : jobApp)
    
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
        
        fetch(`${process.env.REACT_APP_API_URL}/job_applications/${app.id}`, configObj)
            .then(resp => resp.json())
            .then( (resp) => {
                setJobApps(updateJobApps(resp))
                
            })
            .catch(console.error)
    }
    return (
        <div>
            <h1>job: {app.job.role}</h1>
            <h2>org: {app.job.organization.name}</h2>
            <h2>notes: {app.notes}</h2>
            <h2>application method-{app.application_process}</h2>
            <h3>rejected-{app.rejected ? "yes" : "no"}</h3>
            <h3>status-{app.status}</h3>
            <Link to={`/job_applications/${app.id}/tasks`}><button>Tasks</button></Link>
            <Link to={`/job_applications/${app.id}/contacts`}><button>Contacts</button></Link>
            { showEdit ? <JobApplicationForm fetch={handleEdit} jobApp={app}/> : null}
            <button onClick={handleClick}>{showEdit ? "Close" : "Edit"}</button>
            
        </div>
    )
}

export default JobAppCard