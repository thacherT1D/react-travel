import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom';

import { NavigationDrawer } from 'react-md';

import NavLink from './NavLink';

import Home from './Pages/Home';
import Parks from './Pages/Parks';
import Page2 from './Pages/Page2';
import Flying from './Pages/Flying';

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
  label: 'Page 2',
  to: '/page-2',
  icon: 'donut_large',
}, {
  label: 'Flying',
  to: '/flying',
  icon: 'flight_takeoff',
}];

class App extends Component {
  render() {
    return (
      <Route
        render={({ location }) => (
          <NavigationDrawer
            drawerTitle="Home"
            toolbarTitle="Travel with Pups"
            navItems={navItems.map(props => <NavLink {...props} key={props.to} />)}
          >
            <Switch key={location.key}>
              <Route exact path="/" location={location} component={Home} />
              <Route path="/parks" location={location} component={Parks} />
              <Route path="/page-2" location={location} component={Page2} />
              <Route path="/flying" location={location} component={Flying} />
            </Switch>
          </NavigationDrawer>
        )}
      />
    );
  }
}

export default App;
