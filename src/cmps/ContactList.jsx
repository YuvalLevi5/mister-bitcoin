import { ContactPreview } from "./ContactPreview"
export function ContactList({ contacts, deleteUser }) {
    return (
        <ul className="clean-list flex flex-col flex-center">
           {contacts.map((contact) => {
            return <ContactPreview deleteUser={deleteUser} key={contact._id} contact={contact} />
           })}
        </ul>
    )
}
