function JobAppCard({app}) {
   
    return (
        <div>
            <h1>{app.job.role}</h1>
            {/* <h2>{app.job.organizaion.name}</h2> */}
            <h2>{app.notes}</h2>
            <h2>{app.application_process}</h2>
        </div>
    )
}

export default JobAppCard