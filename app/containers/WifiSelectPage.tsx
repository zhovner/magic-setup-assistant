import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import WifiSelect from '../components/WifiSelect';

export class HomePage extends React.Component<RouteComponentProps<any>, void> {
  render() {
    return (
      <WifiSelect />
    );
  }
}

export default (HomePage as any as React.StatelessComponent<RouteComponentProps<any>>);
