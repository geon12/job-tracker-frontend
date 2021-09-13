function JobAppCard({app}) {
    return (
        <div>
            <h2>{app.notes}</h2>
            <h2>{app.application_process}</h2>
        </div>
    )
}

export default JobAppCard