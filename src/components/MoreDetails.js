import React, { Component } from 'react';
import { WorkingHours } from './WorkingHours';
import txt from '../data/text';

class MoreDetails extends Component {
  constructor(props) {
    super(props);
    this.backToList = this.backToList.bind(this);
  }
  backToList() {
    this.props.showStore();
  }
  getClass(isMobile) {
    let result = 'btn btn-info';
    if (!isMobile) {
      result = result + ' hide';
    }
    return result;
  }
  render() {
    return (
      <div className={this.props.openStore === this.props.id ? 'more-details' : 'more-details hidden'}>
        <p className="text-right">
          &nbsp;
          <button className={this.getClass(this.props.mobile)} type="button" onClick={this.props.toggleStores}>
            {txt.map}
            <span className="glyphicon glyphicon-map-marker" />
          </button>
          &nbsp;
          <button className="btn btn-info" type="button" onClick={this.backToList}>
            {txt.back}
            <span className="glyphicon glyphicon-list" />
          </button>
        </p>
      </div>
    );
  }
}

export { MoreDetails };
