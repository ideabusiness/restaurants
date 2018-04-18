import React, { Component } from 'react';

class Map extends Component {
  constructor(props) {
    super(props);
    this.addMarker = this.addMarker.bind(this);
    this.moveMap = this.moveMap.bind(this);

    this.map = undefined;
    this.markers = [];
    this.bounds = undefined;
  }
  addMarker(map, index, position) {
    var marker = new window.google.maps.Marker({
      position: position,
      map: map,
      icon: './icon-store-black.svg'
    });
    marker.addListener('click', () => {
      map.panTo(position);
      this.props.showStore(index);
    });
    return marker;
  }
  componentDidMount() {
    // init map and bounds
    this.map = new window.google.maps.Map(this.refs.map, {
      center: { lat: 54.679408, lng: 25.284144 },
      zoom: 16
    });
    this.bounds = new window.google.maps.LatLngBounds();

    // display markers and fit map to show all of them
    var position;
    this.props.stores.forEach((store, index) => {
      position = { lat: store.lat, lng: store.lng };
      this.markers.push(this.addMarker(this.map, index, position));
      this.bounds.extend(position);
    });
    this.moveMap(this.map, this.bounds);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.openStore !== this.props.openStore) {
      this.markers = this.colorMarkers(this.markers, this.props.openStore);
      this.moveMap(this.map, this.bounds, this.props.openStore, this.props.stores);
    }
  }
  colorMarkers(markers, index) {
    // go through markers and assign appropriate colour
    markers.forEach((marker, markerIndex) => {
      if (index === markerIndex) {
        // active marker is red
        marker.setIcon('./icon-store-red.svg');
      } else {
        // regular marker is black
        marker.setIcon('./icon-store-black.svg');
      }
    });
    return markers;
  }
  moveMap(map, bounds, index = -1, stores = []) {
    if (index === -1) {
      map.fitBounds(bounds);
    } else {
      map.panTo({ lat: stores[index].lat, lng: stores[index].lng });
    }
  }
  render() {
    return <div ref="map" className="map" />;
  }
}

export { Map };
