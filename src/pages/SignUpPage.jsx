import { Component } from 'react';
import { connect } from 'react-redux'
import { signup } from '../store/actions/userActions'


class _SignUpPage extends Component {
    state = {
        username: null,

    }
    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? (+target.value || '') : target.value
        this.setState(prevState => ({ username: value }))
    }

    signup = () => {
        const { username } = this.state
        this.props.signup(username)
    }

    render() {
        return (
            <section className='signup-container flex flex-col flex-center'>
                <div className='form-container flex flex-col'>
                    <h1>Welcome to <span>Mister Bitcoin</span></h1>
                    <h3>Please enter your name</h3>
                    <input className='form-input' onChange={this.handleChange} type="text" name="username" />
                    <button onClick={this.signup} className='btn btn-success'>Sign up</button>
                </div>
            </section>
        )
    }
}


const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = {
    signup,

}

export const SignUpPage = connect(mapStateToProps, mapDispatchToProps)(_SignUpPage)
