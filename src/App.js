import React, { Component } from 'react';
import { Map } from './Map.js';
import { Store } from './Store.js';
import { ToggleButton } from './ToggleButton';
import './App.css';
import preload from './data';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      desktop: true,
      showStores: true
    };
    this.toggleStores = this.toggleStores.bind(this);
  }

  toggleStores() {
    this.setState({
      showStores: !this.state.showStores
    });
  }

  componentDidMount() {
    var mq = window.matchMedia('(min-width: 1025px)');
    this.setState({ desktop: mq.matches });
    mq.addListener(e => {
      this.setState({ desktop: e.matches });
    });
  }

  render() {
    return (
      <div className="container">
        <div className="page-header">
          <h1>Store locator template</h1>
        </div>

        <ToggleButton showStores={this.state.showStores} toggleStores={this.toggleStores} />

        <div className="store-locator">
          <div className="store-list-container">
            <div
              className={
                this.state.desktop
                  ? 'list-group'
                  : this.state.showStores ? 'list-group animated slideInLeft' : 'list-group animated slideOutLeft'
              }
            >
              {preload.stores.map((store, index) => <Store {...store} key={index} />)}
            </div>
          </div>
          <Map />
        </div>
      </div>
    );
  }
}

export default App;
