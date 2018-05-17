import React, { Component } from 'react';
import txt from '../data/text';

class MainDetails extends Component {
  render() {
    return (
      <div className="main-details" onClick={this.props.showStore}>
        <h4 className="list-group-item-heading">{this.props.title}</h4>
        <p className="list-group-item-text">
          {this.props.address}
        </p>
      </div>
    );
  }
}

export { MainDetails };
