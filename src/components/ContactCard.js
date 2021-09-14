function ContactCard({contact}) {
    return (
        <div>
            <h1>{contact.name}</h1>
            <h2>{contact.role}</h2>
            <h3>{contact.email}</h3>
            <h3>{contact.phone_number}</h3>
            <p>{contact.description}</p>
            <button>Delete</button>
            <button>Edit</button>
        </div>
    )
}

export default ContactCard