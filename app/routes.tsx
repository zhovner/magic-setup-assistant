import * as React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import WifiSelectPage from './containers/WifiSelectPage';

export default () => (
  <App>
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/select-wifi" component={WifiSelectPage} />
    </Switch>
  </App>
);
