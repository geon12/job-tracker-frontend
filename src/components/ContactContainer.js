import ContactCard from "./ContactCard"

function ContactContainer({app}) {
    function populateCards() {
        return app.contacts.map((contact) => <ContactCard contact={contact}/>)
    }
    return (
        <div>
             {app ? populateCards() : <div>Page is Loading</div>}
        </div>
    )
}

export default ContactContainer