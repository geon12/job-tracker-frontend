function JobAppCard({app}) {
   
    return (
        <div>
            <h1>job: {app.job.role}</h1>
            <h2>org: {app.job.organization.name}</h2>
            <h2>notes: {app.notes}</h2>
            <h2>application method-{app.application_process}</h2>
            <h3>rejected-{app.rejected ? "No" : "yes"}</h3>
            <h3>status-{app.status}</h3>
        </div>
    )
}

export default JobAppCard