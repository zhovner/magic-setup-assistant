import * as React from 'react';
import CountryPicker from './CountryPicker';
import ArrowNavigation from './ArrowNavigation';

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
      <div className="page">
        <h1>Welcome</h1>
        <p className="description">
          In just a few steps, you can register and set up your Mac.
        </p>
      
        <img className="worldmap" src="resources/worldMapSmall.png"/>
        
        <CountryPicker countries={countries} />
        <ArrowNavigation nextTo="wifi" backTo="" />
      </div> 
    );
  }
}
