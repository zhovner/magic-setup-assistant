import React, { Component } from 'react';

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
  "中国简体"
]

export default class CountryPicker extends Component {
  render() {
    const countryList = countries.map(country => <option>{country}</option>)

    return (
      <div className="countries">
        <select className="list" multiple size="9">
          {countryList}
        </select>
        <label>
          <input type="checkbox" value="Showall" />Show All
        </label>
      </div>
    )
  }
};