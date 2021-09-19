import { Link } from "react-router-dom"

function JobAppCard({app}) {
    
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
            <button>Edit</button>
            
        </div>
    )
}

export default JobAppCard