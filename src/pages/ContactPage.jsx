import { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { contactService } from '../services/contactService';
import { ContactList } from '../cmps/ContactList'
import { ContactFilter } from '../cmps/ContactFilter'
import { loadContacts, removeContact, setFilterBy } from '../store/actions/contactActions'

class _ContactPage extends Component {
  state = {
    contacts: null,
    filterBy: null
  }

  componentDidMount() {
    this.props.loadContacts()
  }

  onDeleteUser = (id) => {
    this.props.removeContact(id)
  };

  onChangeFilter = (filterBy) => {
    this.props.setFilterBy(filterBy)
    this.props.loadContacts()
  }

  render() {
    const { contacts } = this.props
    if (!contacts) return <div>loading...</div>
    return (
      <section className='flex flex-col items-center'>
        <Link style={{ textDecoration: 'none' }} to="/contact/edit" className='add-contact-btn btn btn-success'>Add Contact</Link>
        <ContactFilter onChangeFilter={this.onChangeFilter} />
        <ContactList contacts={contacts} deleteUser={this.onDeleteUser} />
      </section>
    )
  }
}


const mapStateToProps = state => {
  return {
    contacts: state.contactModule.contacts
  }
}

const mapDispatchToProps = {
  loadContacts,
  removeContact,
  setFilterBy,
}

export const ContactPage = connect(mapStateToProps, mapDispatchToProps)(_ContactPage)
