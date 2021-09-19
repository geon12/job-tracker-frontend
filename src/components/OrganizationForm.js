import { useState } from "react"
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
            <h2>What organization are you applying to ?</h2>
            <input 
                type="text" 
                name="name" 
                placeholder="Organization Name"
                value={formData.name} 
                onChange={handleChange}
                className="form-control-sm mx-2"
            />
            <input 
                type="text" 
                name="industry" 
                placeholder="Industry"
                value={formData.industry} 
                onChange={handleChange}
                className="form-control-sm mx-2"
            />
            <input 
                type="text" 
                name="description" 
                placeholder="Description"
                value={formData.description} 
                onChange={handleChange}
                className="form-control-sm mx-2"
            />
            <button className="btn btn-secondary btn-sm">Add Organization</button>
        </form>
    )
}

export default OrganizationForm