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
        <div className="card card-body border-dark text-center my-3 mx-5">
            <h1 className="card-header">Role: {app.job.role}</h1>
            <h2>Organization: {app.job.organization.name}</h2>
            <h2 className="card-text">Notes: {app.notes}</h2>
            <h2>How you applied: {app.application_process}</h2>
            <h3>Rejected?: {app.rejected ? "Yes" : "No"}</h3>
            <h3>Status: {app.status}</h3>
            <div className="d-inline">
                <Link to={`/job_applications/${app.id}/tasks`}><button className="btn btn-dark my-1 mx-5 px-4">Tasks</button></Link>
                <Link to={`/job_applications/${app.id}/contacts`}><button className="btn btn-dark my-3">Contacts</button></Link>
            </div>
            { showEdit ? <JobApplicationForm fetch={handleEdit} jobApp={app}/> : null}
            <div>
                <button className="btn btn-secondary btn-lg my-2" onClick={handleClick}>{showEdit ? "Close" : "Edit"}</button>
            </div>
        </div>
    )
}

export default JobAppCard