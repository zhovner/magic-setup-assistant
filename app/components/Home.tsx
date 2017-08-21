import * as React from 'react';
import WizardLayout from './WizardLayout';
import CountryPicker from './CountryPicker';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
  render() {
    const countries = [
      "English",
      "Русский",
      "Тоҷикистон",
      "Украiнська",
      "Беларуская",
      "Español",
      "中国简体",
      "Беларуская",
      "Español",
      "中国简体",
    ];

    return (
      <WizardLayout>
        <h1>Welcome</h1>
        <p className="description">
          In just a few steps, you can register and set up your Mac.
        </p>
      
        <img className="worldmap" src="resources/worldMapSmall.png"/>
        
        <CountryPicker countries={countries} />

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
