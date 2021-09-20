import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useState } from "react";
import ContactCard from "./ContactCard"
import ContactForm from "./ContactForm";

function ContactContainer({jobApps, setJobApps}) {
    let { appId } = useParams();
    const app = jobApps.find((jobApp) => jobApp.id.toString() === appId)

    const [showForm,setShowForm] = useState(false)
    
    function populateCards() {
        return app.contacts.map((contact) => <ContactCard key={contact.id} contact={contact} setJobApps={setJobApps} jobApps={jobApps} app={app}/>)
    }

    function handleClick() {
        setShowForm(prevState => !prevState)
    }

    function updateContacts(newContact) {
        app.contacts.push(newContact)
        return jobApps.map((jobApp) => jobApp.id === app.id ? app : jobApp)
    }

    function addContact(data) {
        const configObj = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            credentials:'include',
            body: JSON.stringify(data)
        }
        fetch(`${process.env.REACT_APP_API_URL}/contacts`,configObj)
            .then((resp) => {
                if (resp.ok) {
                    resp.json().then(resp => {
                        
                        setJobApps(updateContacts(resp))
                        setShowForm(prevState => !prevState)
                    })
                }
                else {
                    resp.json().then((resp) => resp.errors)
                }
            })
    }
    return (
        <div>
            <Link to="/job_applications"><button className="btn btn-dark m-2">⇦ Back to Applications</button></Link>
            {showForm ? <ContactForm fetch={addContact} appId={appId}/> : null}
            <div className="text-center">
                <button className="btn btn-secondary btn-lg m-2" onClick={handleClick}>{showForm ? "Close Form" : "Add Contact"}</button>
            </div>
             {app ? populateCards() : <div>Page is Loading</div>}
        </div>
    )
}

export default ContactContainer