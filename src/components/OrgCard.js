function OrgCard({org}) {
    return (
        <div>
            <h1>{org.name}</h1>
            <h2>{org.industry}</h2>
            <p>{org.description}</p>
        </div>
    )
}

export default OrgCard