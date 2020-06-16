import React, {Component} from 'react';
import PropTypes from 'prop-types';
import GoogleMap from 'google-map-react';
import string from '../../../Config/strings';
import assets from '../../../Config/assets';
import {connect} from 'react-redux'
import {actionDispatcher} from '../../../../redux/actions';
import store from '../../../../redux/store';


const Marker = () => <img style={{width: 35}}
                          src={assets.mapIcon}/>;

class GoogleMapBlock extends Component {

  constructor(props) {
    super(props);
    this.state = {
      center: {lat: string.default_lat, lng: string.default_lng},
      markerCenter: {lat: string.default_lat, lng: string.default_lng},
      draggable: true,
      zoom: 15
    }
  }

  onMouseDown = (childKey, childProps, mouse) => {
    this.setState({draggable: false});
  };

  onMouseMove = (childKey, childProps, mouse) => {
    this.setState({
      markerCenter: mouse,
    });
  };

  onMouseUp = (childKey, childProps, mouse) => {
    this.setState({
      markerCenter: mouse,
      center: mouse,
      draggable: true
    });

    // store.dispatch(actionDispatcher.newProject.setProperties({
    //   latitude: mouse.lat,
    //   longitude: mouse.lng
    // }))
  };


  render() {
    return (
      <GoogleMap
        bootstrapURLKeys={{key: "AIzaSyCdcZT7cVQbrxc8EtT2NRvQV-2DX2ZGN34"}}
        zoom={this.state.zoom}
        center={this.state.center}
        draggable={this.state.draggable}
        onChildMouseDown={this.onMouseDown}
        onChildMouseMove={this.onMouseMove}
        onChildMouseUp={this.onMouseUp}
      >
        <Marker
          onDrag={this.onDrag}
          lat={this.state.markerCenter.lat}
          lng={this.state.markerCenter.lng}
        />
      </GoogleMap>

    )
  };

}


export default connect()(GoogleMapBlock);
