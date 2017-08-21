import * as React from 'react';
import WizardLayout from './WizardLayout';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
  render() {
    return (
      <WizardLayout>
        <h1>Welcome</h1>
        <p className="description">In just a few steps, you can register and set up your Mac.</p>
      
        <img className="worldmap" src="resources/worldMapSmall.png"/>
        
        <div className="countries">
          <select className="list" size={7}>
            <option>English</option>
            <option>Русский</option>
            <option>Тоҷикистон</option>
            <option>Украiнська</option>
            <option>Беларуская</option>
            <option>Español</option>
            <option>中国简体</option>
            <option>Беларуская</option>
            <option>Español</option>
            <option>中国简体</option>
          </select>
          <label><input type="checkbox" value="Showall" />Show All</label>
        </div>

        <div className="movement-buttons">
          <div className="arrow-button-container" >
            <button className="arrow-button back" disabled></button>
            <span>Back</span>
          </div>
          
          <Link to='/wifi'>
            <div className="arrow-button-container" >
              <button className="arrow-button forward"></button>
              <span>Continue</span>
            </div>
          </Link>
        </div>
      </WizardLayout>
    );
  }
}
