import { useState } from "react"

function Profile({user}) {

    const [showEdit,setShowEdit] = useState(null)
    function handleClick() {
        setShowEdit(prevState => !prevState)
    }
    return (
        
        <div>
            <div>Hello, {user.name}</div>
            <div>location: {user.location}</div>
            <div>email: {user.email}</div>
            <div>job: {user.job_title}</div>
            <button onClick={handleClick}>{showEdit ? "Close Form" : "Edit Profile"}</button>
            <div>
                <div>Jobs</div>
                <div>Active Tasks</div>
                <div>Contacts</div>
            </div>
            
        </div>
    )

}

export default Profile