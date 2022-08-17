import { Component } from 'react'
import { bitCoinService } from "../services/bitcoinService"
import { userService } from '../services/userService'
import { connect } from 'react-redux'
import { MovesList } from '../cmps/MovesList'
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';


class _HomePage extends Component {

    state = {
        user: null,
        bitCoinUsdPrice: null,
    }

    componentDidMount() {
        bitCoinService.getRate().then((res) => {
            this.setState({ bitCoinUsdPrice: res })
        })
        const user = userService.getUser()
        this.setState({ user })
    }

    render() {
        const { bitCoinUsdPrice } = this.state
        const { loggedInUser } = this.props
        const reverseMoves = loggedInUser.moves.reverse()
        if (!loggedInUser) return <div>No user</div>
        return (
            <section className='try'>
                <h1>Hello {loggedInUser.name}</h1>
                <div>
                    <h5>Current Balance</h5>
                    <p>
                        BIT: <span className="bit-coin-balance">₿{loggedInUser.coins}</span>
                    </p>
                    <p>
                        USD: <span>{bitCoinUsdPrice * loggedInUser.coins}$</span>
                    </p>
                </div>
                <div>
                    <MovesList moves={reverseMoves}></MovesList>
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        loggedInUser: state.userModule.loggedInUser
    }
}

export const HomePage = connect(mapStateToProps)(_HomePage)