import {useState} from "react"

function ContactForm({contact,setShowForm,fetch}) {
    const initialState = {
        name: contact.name ? contact.name : "",
        email: contact.email ? contact.email : "",
        role: contact.role ? contact.role : "",
        phone_number: contact.phone_number ? contact.phone_number : "",
        description: contact.description ? contact.description : ""
    }
    const [formData, setFormData] = useState(contact ? initialState : null)

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
        setShowForm(prevState => !prevState)
    }
    return (
        <form onSubmit={handleSubmit}> 
            <input 
                type="text" 
                name="name" 
                placeholder="Name"
                value={formData.name} 
                onChange={handleChange}
            />
            <input 
                type="text" 
                name="role" 
                placeholder="Role"
                value={formData.role} 
                onChange={handleChange}
            />
            <input 
                type="text" 
                name="email" 
                placeholder="Email" 
                value={formData.email} 
                onChange={handleChange}
            />
            <input 
                type="text" 
                name="phone_number" 
                placeholder="Phone Number" 
                value={formData.phone_number} 
                onChange={handleChange}
            />
            <input 
                type="text" 
                name="description" 
                placeholder="Description" 
                value={formData.description} 
                onChange={handleChange}
            />
            <button type="submit">Save</button>
        </form>
    )
}

export default ContactForm