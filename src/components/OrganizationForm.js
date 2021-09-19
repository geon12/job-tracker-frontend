function OrganizationForm({addOrganization}) {
    const initialState = {name: "" , description: "", industry: ""}
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
        
        addOrganization(formData)
        
    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="name" 
                placeholder="Organization Name"
                value={formData.name} 
                onChange={handleChange}
            />
            <input 
                type="text" 
                name="industry" 
                placeholder="Industry"
                value={formData.industry} 
                onChange={handleChange}
            />
            <input 
                type="text" 
                name="description" 
                placeholder="Job Description"
                value={formData.description} 
                onChange={handleChange}
            />
        </form>
    )
}

export default OrganizationForm