import ContactCard from "./ContactCard"

function ContactContainer({app}) {
    function populateCards() {
        return app.contacts.map((contact) => <ContactCard contact={contact}/>)
    }
    return (
        <div>
             {app ? populateCards() : <di>Page is Loading</di>}
        </div>
    )
}

export default ContactContainer