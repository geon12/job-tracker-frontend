import { useState } from "react"
import ProfileEditForm from "./ProfileEditForm"

function Profile({user,setUser}) {

    const [showEdit,setShowEdit] = useState(false)
    function handleClick() {
        setShowEdit(prevState => !prevState)
    }
    return (
        
        <div>
            {   showEdit ?
                <ProfileEditForm user={user} setUser={setUser} setShowEdit={setShowEdit}/> :
                <>
                    <div>Hello, {user.name}</div>
                    <div>location: {user.location}</div>
                    <div>email: {user.email}</div>
                    <div>job: {user.job_title}</div>
                </>
                
            }
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