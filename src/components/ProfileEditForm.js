import {useState} from "react"

function ProfileEditForm({user,setUser,setShowEdit}) {

    const initialState = {
        id: user.id,
        name: user.name ? user.name : "",
        location: user.location ? user.location : "",
        job_title: user.job_title ? user.job_title : "",
        email: user.email ? user.email : ""
    }
    const [formData, setFormData] = useState(initialState)

    function handleChange(event) {
        const name = event.target.name
        let value = event.target.value

        setFormData({
            ...formData,
            [name]: value
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        const configObj = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials:'include',
            body: JSON.stringify(formData)
        }
        
        fetch(`${process.env.REACT_APP_API_URL}/profile/`, configObj)
            .then(resp => resp.json())
            .then( (resp) => {
                
                setUser(resp)
                setShowEdit(prevState => !prevState)
            })
            .catch(console.error)
            

    }
    return (
        <form onSubmit={handleSubmit} className="form-group text-center">
            <div>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Name"
                    value={formData.name} 
                    onChange={handleChange}
                    className="form-control-lg my-2"
                />
            </div>
            <div>
                <input 
                    type="text" 
                    name="location" 
                    placeholder="Location"
                    value={formData.location} 
                    onChange={handleChange}
                    className="form-control-lg my-2"
                />
            </div>
            <div>
                <input 
                    type="text" 
                    name="email" 
                    placeholder="Email" 
                    value={formData.email} 
                    onChange={handleChange}
                    className="form-control-lg my-2"
                />
            </div>
            <div>
                <input 
                    type="text" 
                    name="job_title" 
                    placeholder="Job Title" 
                    value={formData.job_title} 
                    onChange={handleChange}
                    className="form-control-lg my-2"
                />
            </div>
            <button type="submit" className="btn btn-light btn-dark mt-2">Save Changes</button>
        </form>
    )
}

export default ProfileEditForm