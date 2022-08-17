import React, { Component } from 'react'
import { contactService } from '../services/contactService'
import { connect } from 'react-redux'
import { saveContact } from '../store/actions/contactActions'


class _ContactEdit extends Component {
    state = {
        contact: null,
    }

    async componentDidMount() {
        const contactId = this.props.match.params.id
        const contact = contactId ? await contactService.getContactById(contactId) : contactService.getEmptyContact()
        this.setState({ contact })
    }


    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? (+target.value || '') : target.value
        this.setState(prevState => ({ contact: { ...prevState.contact, [field]: value } }))
    }

    onSaveContact = async (ev) => {
        ev.preventDefault()
        const { contact } = this.state
        this.props.saveContact({...contact} )
        this.props.history.push('/contact')
    }


    render() {
        const { contact } = this.state
        console.log(contact)
        if (!contact) return <div>loading..</div>
        return (
            <section>
                <form onSubmit={this.onSaveContact} className='form-container flex flex-col'>
                    <div className='form-line'>
                        <label htmlFor="name">Name: </label>
                        <input value={contact.name} type="text" onChange={this.handleChange} name="name" id="name" />
                    </div>

                    <div className='form-line'>
                        <label htmlFor="email">Email: </label>
                        <input value={contact.email} type="email" onChange={this.handleChange} name="email" id="email" />
                    </div>
                    <div className='form-line'>
                        <label htmlFor="phone">Phone: </label>
                        <input value={contact.phone} type="tel" onChange={this.handleChange} name="phone" id="phone" />
                    </div>
                    <button className='save-contact btn btn-primary' >Save Contact</button>
                </form>
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
    saveContact,
}

export const ContactEdit = connect(mapStateToProps, mapDispatchToProps)(_ContactEdit)
