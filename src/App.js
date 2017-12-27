import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom';

import { NavigationDrawer } from 'react-md';

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
          <NavigationDrawer
            drawerTitle="Home"
            toolbarTitle="Doge Travel Guide"
            navItems={navItems.map(props => <NavLink {...props} key={props.to} />)}
          >
            <Switch key={location.key}>
              <Route exact path="/" location={location} component={Home} />
              <Route path="/parks" location={location} component={Parks} />
              <Route path="/things" location={location} component={Things} />
              <Route path="/friends" location={location} component={Friends} />
            </Switch>
          </NavigationDrawer>
        )}
      />
    );
  }
}

export default App;
