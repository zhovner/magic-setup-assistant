import * as React from 'react';

export default class WizardLayout extends React.Component<{}, {}> {
  render() {
    return (
      <div className="app">
        <div className="page">
          {this.props.children}
        </div>
      </div>
    );
  }
}