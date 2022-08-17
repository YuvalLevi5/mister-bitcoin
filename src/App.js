import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Component } from 'react';
import './assets/scss/global.scss';
import {HomePage} from './pages/HomePage';
import { ContactPage } from './pages/ContactPage';
import StatisticPage from './pages/StatisticPage'
import { AppHeader } from '../src/cmps/AppHeader'
import ContactDetails from './pages/ContactDetails'
import { ContactEdit } from './pages/ContactEdit'
import { SignUpPage } from './pages/SignUpPage'
import { connect } from 'react-redux'

class _App extends Component {
  render() {
    if(!this.props.loggedInUser) return <SignUpPage/>
    return (
      <Router>
        <div className="App">
          <AppHeader></AppHeader>
          <div className="container">
            <Switch>
              <Route path='/contact/edit/:id?' component={ContactEdit} />
              <Route path='/contact/:id' component={ContactDetails} />
              <Route path='/contact' component={ContactPage} />
              <Route path='/stat' component={StatisticPage} />
              <Route path='/' component={HomePage} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

// export default _App;

const mapStateToProps = state => {
  return {
    loggedInUser: state.userModule.loggedInUser
  }
}

export const App = connect(mapStateToProps)(_App)
