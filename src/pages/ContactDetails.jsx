import React, { Component } from 'react'
import { contactService } from '../services/contactService'
import { userService } from '../services/userService'
import { connect } from 'react-redux'
import { makeMove } from '../store/actions/userActions'
import { MovesList } from '../cmps/MovesList'

class _ContactDetails extends Component {
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
        await this.loadContact()

    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.loadContact()
        }
    }

    async loadContact() {
        const loggedInUserMoves = this.props.loggedInUser.moves
        const contactId = this.props.match.params.id
        const contact = await contactService.getContactById(contactId)


        contact.moves = loggedInUserMoves.filter((move) => contact._id === move.to)
        contact.moves = contact.moves.reverse()
        console.log(contact)
        this.setState({ contact })
    }

    onBack = () => {
        this.props.history.push('/contact')
        // this.props.history.goBack()
    }

    makeAmove = async (ev) => {
        ev.preventDefault()
        const { move, contact } = this.state
        // userService.makeMove(move.amount)
        await this.props.makeMove(move.amount, contact)
         this.loadContact()
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
                    <input className='form-input' type="number" name="amount" id="amount" value={move.amount} onChange={this.handleChange} />
                    <button className='btn btn-success' onClick={this.makeAmove}>CLick</button>
                </form>

                <div className="btn-container">
                    <button className='back-btn btn btn-secondary' onClick={this.onBack}>Back</button>
                </div>

                <MovesList moves={contact.moves} isHomePage={false} />
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        loggedInUser: state.userModule.loggedInUser
    }
}

const mapDispatchToProps = {
    makeMove,
}

export const ContactDetails = connect(mapStateToProps, mapDispatchToProps)(_ContactDetails)
