import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import ArrowNavigation from './ArrowNavigation';
import { ProgressCircle } from 'react-desktop/macOs';

export interface IProps extends RouteComponentProps<any> {
  requestAccessPoints(): void,
  accessPoints: Array<any>
}

export class WifiSelect extends React.Component<IProps> {
  render() {
    return (
      <div className="page">
        <h1>Select Your Wi-Fi Network</h1>
        
        <p className="description">
          If you connect to the Internet using a wired network or other networok device, click Other
          <br />
          Network Options. If you would rather set up your network connection later, click Continue.
        </p>
        <img height="140" src="resources/wififan.png" />
        <br/>
        <br/>

        <div className="network-list">
          <select className="list" size={6}>
            <option>MGTS GPON 163</option>
            <option>Vovan</option>
            <option>Beeline_WiFi_FREE</option>
            <option>StarLink Service</option>
          </select>
          <br/>
            <ProgressCircle size={18}/>
            Looking for networks...
        </div>

        <ArrowNavigation nextTo="/" backTo="/" />
      </div>
    );
  }
}

export default WifiSelect;