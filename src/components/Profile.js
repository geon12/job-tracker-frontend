function Profile({user}) {
    
    return (
        <div>
            <div>Hello, {user.name}</div>
            <div>location: {user.location}</div>
            <div>email: {user.email}</div>
            <div>job: {user.job_title}</div>
        </div>
    )

}

export default Profile