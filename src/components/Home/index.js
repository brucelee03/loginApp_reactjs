import {Component} from 'react'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

import './index.css'

class Home extends Component {
  state = {isLoggedIn: false}

  handleLogin = () => {
    this.setState({isLoggedIn: true})
  }

  handleLogout = () => {
    this.setState({isLoggedIn: false})
  }

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="bg-container">
        <div className="home">
          {isLoggedIn ? (
            <>
              <Message message="Welcome User" />
              <Logout onLogout={this.handleLogout} />
            </>
          ) : (
            <>
              <Message message="Please Login" />
              <Login onLogin={this.handleLogin} />
            </>
          )}
        </div>
      </div>
    )
  }
}

export default Home
