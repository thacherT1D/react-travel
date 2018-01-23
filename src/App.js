import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom';

import { NavigationDrawer } from 'react-md';

import { Nav, Navbar, NavItem, NavDropdown, MenuItem , Toggle, Collapse } from 'react-bootstrap';

import NavLink from './NavLink';

import Home from './Pages/Home';
import Parks from './Pages/Parks';
import Things from './Pages/Things';
import Friends from './Pages/Friends';

const navItems = [{
  exact: true,
  label: 'Home',
  to: '/',
  icon: 'home',
}, {
  label: 'Parks',
  to: '/parks',
  icon: 'pets',
}, {
  label: 'Things',
  to: '/things',
  icon: 'shop',
}, {
  label: 'Friends',
  to: '/friends',
  icon: 'flight_takeoff',
}];

class App extends Component {
  render() {
    return (
      <Route
        render={({ location }) => (
          <Navbar collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#brand">Doggo's Day Out</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <
                <NavItem eventKey={1} href="/parks">Parks</NavItem>
                <NavItem eventKey={2} href="#">
                  Link
                </NavItem>
                <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                  <MenuItem eventKey={3.1}>Action</MenuItem>
                  <MenuItem eventKey={3.2}>Another action</MenuItem>
                  <MenuItem eventKey={3.3}>Something else here</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={3.3}>Separated link</MenuItem>
                </NavDropdown>
              </Nav>
              <Nav pullRight>
                <NavItem eventKey={1} href="#">
                  Link Right
                </NavItem>
                <NavItem eventKey={2} href="#">
                  Link Right
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        )}
      />
    );
  }
}

export default App;
