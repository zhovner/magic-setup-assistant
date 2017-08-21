import * as React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import WifiSelectPage from './containers/WifiSelectPage';

export default () => (
  <App>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/wifi" component={WifiSelectPage} />
    </Switch>
  </App>
);
