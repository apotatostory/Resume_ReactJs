import React, {Component} from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom'

class Menu extends React.Component {

  componentDidMount() {}

  render() {
    return (
      <Router>
        <div>
          <div className="sidenav">
            <Link to="/">HOME</Link>
            <Link to="/1">About</Link>
            <Link to="/2">Services</Link>
            <Link to="/3">Clients</Link>
            <Link to="/4">Contact</Link>

          </div>
          <div className="main">
          <Route exact path="/" component={Home}/>
          <Route path="/1" component={Repos}/>
          <Route path="/2" component={About}/>
          </div>
        </div>
      </Router>
    )
  }
}

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Repos</h2>
      </div>
    )
  }
}

class Repos extends Component {
  render() {
    return (
      <div>
        <h2>Repos</h2>
      </div>
    )
  }
}

class About extends Component {
  render() {
    return (
      <div>
        <h2>Sidenav Example</h2>
        <p>This sidenav is always shown.</p>
        <h2>Repos</h2>
      </div>
    )
  }
}

export default Menu;