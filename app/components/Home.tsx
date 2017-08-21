import * as React from 'react';

export default class Home extends React.Component {
  render() {
    return (
      <div className="flex-container">
        <div className="app">
          <div className="page">
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
                <button className="arrow-button" id="move-back-btn" disabled></button>
                <span>Back</span>
              </div>

              <div className="arrow-button-container" >
                <button className="arrow-button" id="move-forward-btn"></button>
                <span>Continue</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
