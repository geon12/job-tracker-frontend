import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useState } from "react";
import ContactCard from "./ContactCard"

function ContactContainer({jobApps, setJobApps}) {
    let { appId } = useParams();
    const app = jobApps.find((jobApp) => jobApp.id.toString() === appId)

    const [showForm,setShowForm] = useState(false)
    
    function populateCards() {
        return app.contacts.map((contact) => <ContactCard key={contact.id} contact={contact} setJobApps={setJobApps} jobApps={jobApps} app={app}/>)
    }
    return (
        <div>
            <Link to="/job_applications"><button>Back to Applications</button></Link>
            <button>{showForm ? "Close Form" : "Add Contact"}</button>
             {app ? populateCards() : <div>Page is Loading</div>}
        </div>
    )
}

export default ContactContainer