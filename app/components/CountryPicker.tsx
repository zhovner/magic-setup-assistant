import * as React from 'react';

export default class CountryPicker extends React.Component<{countries: Array<string>}, {}> {
  render() {
    const contryOptions = this.props.countries.map(country => <option>{country}</option>)
    
    return (
        <div className="countries">
          <select className="list" size={7}>
            {contryOptions}
          </select>
          <label><input type="checkbox" value="Showall" />Show All</label>
        </div>
    );
  }
}