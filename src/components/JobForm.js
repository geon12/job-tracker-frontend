import {useState} from "react"
function JobForm({organizationId,fetch}) {
    const initialState = {role: "" , listing_url: "", location: "", description: "", organization_id: organizationId}
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
        
        fetch(formData)
        
    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="role" 
                placeholder="Role"
                value={formData.role} 
                onChange={handleChange}
                className="form-control-sm m-2"
            />
            <input 
                type="text" 
                name="listing_url" 
                placeholder="Listing Url"
                value={formData.listing_url} 
                onChange={handleChange}
                className="form-control-sm m-2"
            />
            <input 
                type="text" 
                name="location" 
                placeholder="Location"
                value={formData.location} 
                onChange={handleChange}
                className="form-control-sm m-2"
            />
            <input 
                type="text" 
                name="description" 
                placeholder="Job Description"
                value={formData.description} 
                onChange={handleChange}
                className="form-control-sm m-2"
            />
            <button className="btn btn-secondary btn-sm m-2" type="submit">Add Job</button>
        </form>
    )
}

export default JobForm