import React, { Component } from 'react';

export default class Unit extends Component {
  handleChangeCount = (event) => {
    let count = event.target.value;
    let {index, unit, onChange} = this.props;
    let type = unit[1];
    onChange(index, [count, type]);
  }
  handleChangeType = (event) => {
    let type = event.target.value;
    let {index, unit, onChange} = this.props;
    let count = unit[0];
    onChange(index, [count, type]);
  }
  render() {
    let {country, unit} = this.props;
    let [count, type] = unit;

    let allFrontline = Object.values(country.db.unitTypes).filter(u => u.combat_width > 0);
    let availableFrontline = country.availableUnits().filter(u => u.combat_width > 0).map(u => u.key);

    return <div className="unit-select">
      <input type="number" min="0" value={count} onChange={this.handleChangeCount} />
      <select value={type} onChange={this.handleChangeType}>
        {
          allFrontline.map(unit => <option disabled={availableFrontline.indexOf(unit.key) === -1} key={unit.key} value={unit.key}>{unit.name}</option> )
        }
      </select>
    </div>
  }
}
