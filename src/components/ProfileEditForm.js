function ProfileEditForm({user,setUser}) {

    const initialState = {
        name: user.name,
        location: user.location,
        job: user.job,
        email: user.email
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
            body: JSON.stringify(data)
        }
        
        fetch(`${process.env.REACT_APP_API_URL}/profile}`, configObj)
            .then(resp => resp.json())
            .then( (resp) => {
                
                setUser(resp)
            })
            .catch(console.error)
            

    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="name" 
                placeholder={`${user.name}`} 
                value={formData.name} 
                onChange={handleChange}
            />
            <input 
                type="text" 
                name="location" 
                placeholder={`${user.location}`} 
                value={formData.location} 
                onChange={handleChange}
            />
            <input 
                type="text" 
                name="name" 
                placeholder={`${user.email}`} 
                value={formData.email} 
                onChange={handleChange}
            />
            <input 
                type="text" 
                name="job" 
                placeholder={`${user.job}`} 
                value={formData.job} 
                onChange={handleChange}
            />
            <button type="submit">Save Changes</button>
        </form>
    )
}

export default ProfileEditForm