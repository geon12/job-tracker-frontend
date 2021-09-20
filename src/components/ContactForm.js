import {useState} from "react"

function ContactForm({contact,fetch,appId}) {
    const initialState = contact ? {
        name: contact.name ? contact.name : "",
        email: contact.email ? contact.email : "",
        role: contact.role ? contact.role : "",
        phone_number: contact.phone_number ? contact.phone_number : "",
        description: contact.description ? contact.description : ""
    } : {name: "" , email: "", role: "", phone_number: "", description: "",job_application_id: appId}

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
        <form onSubmit={handleSubmit} className="text-center"> 
            <div>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Name"
                    value={formData.name} 
                    onChange={handleChange}
                    className="form-control-lg m-2"
                />
            </div>
            <div>
                <input 
                    type="text" 
                    name="role" 
                    placeholder="Role"
                    value={formData.role} 
                    onChange={handleChange}
                    className="form-control-lg m-2"
                />
            </div>
            <div>
                <input 
                    type="text" 
                    name="email" 
                    placeholder="Email" 
                    value={formData.email} 
                    onChange={handleChange}
                    className="form-control-lg m-2"
                />
            </div>
            <div>
                <input 
                    type="text" 
                    name="phone_number" 
                    placeholder="Phone Number" 
                    value={formData.phone_number} 
                    onChange={handleChange}
                    className="form-control-lg m-2"
                />
            </div>
            <div>
                <input 
                    type="text" 
                    name="description" 
                    placeholder="Description" 
                    value={formData.description} 
                    onChange={handleChange}
                    className="form-control-lg m-2"
                />
            </div>
            <button className="btn btn-dark m-2" type="submit">Save</button>
        </form>
    )
}

export default ContactForm