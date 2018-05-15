import React, { Component } from 'react';
import txt from '../data/text';

class Filters extends Component {
  constructor(props) {
    super(props);

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.selectCity = this.selectCity.bind(this);
    this.selectHours = this.selectHours.bind(this);
    this.getLiClass = this.getLiClass.bind(this);

    this.state = {
      cityDropdownOpen: false,
      hoursDropdownOpen: false
    };
  }
  toggleDropdown(filterType) {
    const propName = filterType + 'DropdownOpen';
    let newState = {};
    newState[propName] = !this.state[propName];
    this.setState(newState);
  }
  selectCity(city) {
    this.props.updateFilters('city', city);
    this.setState({
      cityDropdownOpen: false
    });
  }
  selectHours(hours) {
    this.props.updateFilters('hours', hours);
    this.setState({
      hoursDropdownOpen: false
    });
  }
  getLiClass(element, selectedElement) {
    if (element === selectedElement) {
      return 'disabled';
    } else {
      return null;
    }
  }
  render() {
    const citiesItems = this.props.cities.map(city => (
      <li key={city} className={this.getLiClass(city, this.props.city)}>
        <a href={null} onClick={() => this.selectCity(city)}>
          {city}
        </a>
      </li>
    ));

    return (
      <div className="filters">
        <div className="city pull-left">
          <div className={this.state.cityDropdownOpen ? 'btn-group open' : 'btn-group'}>
            <button
              type="button"
              className="btn btn-default dropdown-toggle"
              onClick={() => this.toggleDropdown('city')}
            >
              {this.props.city}&nbsp;<span className="caret" />
            </button>
            <ul className="dropdown-menu">{citiesItems}</ul>
          </div>
        </div>
        <div className="hide openHours pull-left">
          <div className={this.state.hoursDropdownOpen ? 'btn-group open' : 'btn-group'}>
            <button
              type="button"
              className="btn btn-default dropdown-toggle"
              onClick={() => this.toggleDropdown('hours')}
            >
              {txt[this.props.hours]}&nbsp;<span className="caret" />
            </button>
            <ul className="dropdown-menu">
              <li className={this.getLiClass('all', this.props.openHours)}>
                <a
                  href={null}
                  onClick={() => {
                    this.selectHours('all');
                  }}
                >
                  {txt.all}
                </a>
              </li>
              <li className={this.getLiClass('openNow', this.props.openHours)}>
                <a
                  href={null}
                  onClick={() => {
                    this.selectHours('openNow');
                  }}
                >
                  {txt.openNow}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export { Filters };
