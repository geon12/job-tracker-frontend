import { useState } from "react"
import ProfileEditForm from "./ProfileEditForm"

function Profile({user,setUser}) {

    const [showEdit,setShowEdit] = useState(false)
    function handleClick() {
        setShowEdit(prevState => !prevState)
    }
    const phrases = ["Let's find a job!","You can do it!", "Every challenge is an opportunity", "It's not whether you get knocked down, it's whether you get back up.",
    "Find a job you love!","Fail often so you can succeed sooner.","One step at a tIme.","The journey of a thousand miles begins with one step.",
    "Make things happen!"]
    return (
        
        <div className="text-center">
            {   showEdit ?
                <ProfileEditForm user={user} setUser={setUser} setShowEdit={setShowEdit}/> :
                <div className="text-center">
                    <h2 className="display-3 text-secondary">{phrases[Math.floor(Math.random()*phrases.length)]}</h2>
                    <h1 className="display-1">Hello, <b>{user.name}</b></h1>
                    <h3 className="display-4 m-2">Location: {user.location}</h3>
                    <h3 className="display-4 m-2">Email: {user.email}</h3>
                    <h3 className="display-4 m-2">Job: {user.job_title}</h3>
                </div>
                
            }
            <button className="text-center btn btn-secondary my-3" onClick={handleClick}>{showEdit ? "Close Form" : "Edit Profile"}</button>
            
        </div>
    )

}

export default Profile