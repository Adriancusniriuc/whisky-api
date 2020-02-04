import React from 'react'
import { Link, withRouter } from 'react-router-dom'
// import Auth from '../../lib/auth'
// import { notify } from 'react-notify-toast'


class Navbar extends React.Component {
  state = { navbarOpen: false }
  toggleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen })
  }
  // handleLogout = () => {
  //   Auth.logout()
  //   notify.show('come back soon', 'success', 3000)
  //   this.props.history.push('/')
  // }

  componentDidUpdate(prevProps){
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({ navbarOpen: false })
    }
  }
  render() {
    const { navbarOpen } = this.state
    return (
      <nav className="navbar is-dark">
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">Home</Link>
            <a className={`navbar-burger ${navbarOpen ? 'is-active' : ''}`} onClick={this.toggleNavbar}>
              <span></span>
              <span></span>
              <span></span>
            </a>
          </div>
          <div className={`navbar-menu ${navbarOpen ? 'is-active' : ''}`}>
            <div className="navbar-start">
              <Link className="navbar-item" to="/whiskies">See all Whiskies</Link>
              {/* <Link className="navbar-item" to= whisky map */}
              {/* {!Auth.isAuthenticated() && <Link className="navbar-item" to="/register">Register</Link>}
              {!Auth.isAuthenticated() && <Link className="navbar-item" to="/login">Login</Link>}
              {Auth.isAuthenticated() && <Link className="navbar-item" to="/cheeses/new">Make a new Cheese</Link>}
              {Auth.isAuthenticated() && <a onClick={this.handleLogout} className="navbar-item">Logout</a>} */}
            </div>
          </div>
        </div>
      </nav>
    )

  }
}

export default withRouter(Navbar)