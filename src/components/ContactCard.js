import {useState} from "react"
import ContactForm from "./ContactForm"

function ContactCard({contact,setJobApps,jobApps,app}) {
    const [showEdit,setShowEdit] = useState(false)
    function handleShowClick() {
        setShowEdit(prevState => !prevState)
    }

    function removeContact(deletedContact) {
        const updatedContacts= app.contacts.filter((contact) => contact.id !== deletedContact )
        const updatedApp = {...app,contacts:updatedContacts}
        return jobApps.map((jobApp) => jobApp.id === updatedApp.id ? updatedApp : jobApp)
    }
    

    function updateContacts(updatedContact) {
        const updatedContacts= app.contacts.map((contact) => contact.id === updatedContact.id ? updatedContact : contact )
        const updatedApp = {...app,contacts:updatedContacts}
        return jobApps.map((jobApp) => jobApp.id === updatedApp.id ? updatedApp : jobApp)
    }

    function handleDelete() {
        fetch(`${process.env.REACT_APP_API_URL}/contacts/${contact.id}`, {method: 'DELETE',credentials:'include'})
            .then( () => {
                setJobApps(removeContact(contact.id)) 
            })
            .catch(console.error)
    }

    function handleEdit(data) {
        const configObj = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials:'include',
            body: JSON.stringify(data)
        }
        
        fetch(`${process.env.REACT_APP_API_URL}/contacts/${contact.id}`, configObj)
            .then(resp => resp.json())
            .then( (resp) => {
                setJobApps(updateContacts(resp)) 
            })
            .catch(console.error)
    }
    return (
        <div>
            { showEdit ?
                <ContactForm contact={contact} setShowForm={setShowEdit} fetch={handleEdit}/> :
                <>
                    <h1>{contact.name}</h1>
                    <h2>role: {contact.role}</h2>
                    <h3>{contact.email}</h3>
                    <h3>{contact.phone_number}</h3>
                    <p>description: {contact.description}</p>
                    <button onClick={handleDelete}>Delete</button>
                </>
            }
            <button onClick={handleShowClick}>{showEdit ? "Close" : "Edit"}</button>
        </div>
    )
}

export default ContactCard