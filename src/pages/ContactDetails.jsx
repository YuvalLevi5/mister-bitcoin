import React, { Component } from 'react'
import { contactService } from '../services/contactService'

export default class ContactDetails extends Component {
    state = {
        contact: null,
        move: {
            from: '',
            to: '',
            at: '',
            amount: ''
        }
    }
    async componentDidMount() {
        this.loadContact()
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.loadRobot()
        }
    }

    async loadContact() {
        const contactId = this.props.match.params.id
        const contact = await contactService.getContactById(contactId)
        this.setState({ contact })
    }

    onBack = () => {
        this.props.history.push('/contact')
        // this.props.history.goBack()
    }

    makeAmove = (ev) => {
        ev.preventDefault()
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? (+target.value || '') : target.value
        this.setState(prevState => ({ move: { ...prevState.move, [field]: value } }))
    }

    render() {
        const { contact, move } = this.state
        if (!contact) return <div>Loading...</div>
        return (
            <div className='details-container flex flex-col flex-center'>
                <div className='img-container'>
                    <img src={`https://robohash.org/${contact.name}`} />
                </div>
                <div className="info-container">

                    <div className='text-container'>
                        <h3>Name:</h3> <h3>{contact.name}</h3>
                    </div>
                    <div className='text-container'>
                        <p>Email:</p>
                        <p>{contact.email}</p>
                    </div>

                    <div className='text-container'>
                        <p>Phone:</p>
                        <p>{contact.phone}</p>
                    </div>
                </div>

                <form>
                    <input type="number"  name="amount" id="amount" value={move.amount} onChange={this.handleChange}/>
                    <button onClick={this.makeAmove}>CLick</button>
                </form>

                <div className="btn-container">
                    <button className='back-btn btn btn-secondary' onClick={this.onBack}>Back</button>
                </div>
            </div>
        )
    }
}
