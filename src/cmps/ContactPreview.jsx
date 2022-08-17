import { Link } from 'react-router-dom'

export function ContactPreview({ contact, deleteUser }) {
    return (
        <li className="contact-item">
            <div className="contact-item-img">
                <img src={`https://robohash.org/${contact.name}`} />
            </div>
            <Link to={`/contact/${contact._id}`} className="contact-item-name">
                {contact.name}
            </Link>
            <Link className="contact-btn edit-btn"
                to={`/contact/edit/${contact._id}`}>
                Edit
            </Link>

            <button className="contact-btn delete-btn"
                onClick={() => deleteUser(contact._id)}>
                Delete
            </button>
        </li>
    )
}
