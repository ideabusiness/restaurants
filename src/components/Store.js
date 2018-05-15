import React, { Component } from 'react';
import { Distance } from './Distance';
import { MoreDetails } from './MoreDetails';
import { MainDetails } from './MainDetails';

class Store extends Component {
  constructor(props) {
    super(props);
    this.showStore = this.showStore.bind(this);
    this.getClass = this.getClass.bind(this);
  }
  getClass(id, openStoreId) {
    // animate element entrance when single store is selected
    var result = 'list-group-item';
    if (openStoreId > -1) {
      if (id === openStoreId) {
        result = result + ' animated fadeIn';
      } else {
        result = result + ' hidden';
      }
    }
    return result;
  }
  showStore() {
    // select single store
    this.props.showStore(this.props.store.id);
  }
  render() {
    return (
      <div className={this.getClass(this.props.id, this.props.openStore)}>
        <Distance distance={this.props.store.distance} />
        <MainDetails
          showStore={this.showStore}
          title={this.props.store.title}
          area={this.props.store.area}
          address={this.props.store.address}
          web={this.props.store.web}
          weblink={this.props.store.weblink}
          phone={this.props.store.phone}
        />
        <MoreDetails
          hours={this.props.store.hoursTxt}
          openStore={this.props.openStore}
          id={this.props.id}
          showStore={this.props.showStore}
          toggleStores={this.props.toggleStores}
          mobile={this.props.mobile}
        />
      </div>
    );
  }
}
export { Store };
