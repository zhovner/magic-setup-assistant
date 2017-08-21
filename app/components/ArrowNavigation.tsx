import * as React from 'react';
import { Link } from 'react-router-dom';

interface IProps {
  nextTo: string,
  backTo: string
}

export default class ArrowNavigation extends React.Component<IProps, {}> {
  render() {
    const { nextTo, backTo } = this.props;

    return (
       <div className="movement-buttons">
          <div className="arrow-button-container" >
            {backTo ?
              <Link to={backTo} className="arrow-button back" />
              : <button className="arrow-button back" disabled></button>}
            <span>Back</span>
          </div>
          
        
          <div className="arrow-button-container" >
            <Link to={nextTo} className="arrow-button forward" />
            <span>Continue</span>
          </div>
        </div>
         
    );
  }
}