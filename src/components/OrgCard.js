function OrgCard({org}) {
    return (
        <div className="card card-body border-dark m-3">
            <h1 className="card-header">{org.name}</h1>
            <h2>{org.industry}</h2>
            <p>{org.description}</p>
        </div>
    )
}

export default OrgCard