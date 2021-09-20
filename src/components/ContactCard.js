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
                setShowEdit(prevState => !prevState)
            })
            .catch(console.error)
    }
    return (
        <div className="card card-body border-dark m-3 text-center mx-5">
            { showEdit ?
                <ContactForm contact={contact} fetch={handleEdit}/> :
                <>
                    <h1>{contact.name}</h1>
                    <h2>Role: {contact.role}</h2>
                    <h3>Email: {contact.email}</h3>
                    <h3>Phone #: {contact.phone_number}</h3>
                    <p>Description: {contact.description}</p>
                    
                </>
            }
            <div>
                <button className="btn btn-secondary btn-sm m-2" onClick={handleDelete}>Delete</button>
                <button className="btn btn-secondary btn-sm m-2" onClick={handleShowClick}>{showEdit ? "Close" : "Edit"}</button>
            </div>
        </div>
    )
}

export default ContactCard