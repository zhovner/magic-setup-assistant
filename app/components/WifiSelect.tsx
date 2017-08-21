import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import WizardLayout from './WizardLayout';

export interface IProps extends RouteComponentProps<any> {
  requestAccessPoints(): void,
  accessPoints: Array<any>
}

export class WifiSelect extends React.Component<IProps> {
  render() {
    return (
      <WizardLayout>
        {this.props.accessPoints}
      </WizardLayout>
    );
  }
}

export default WifiSelect;