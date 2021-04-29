import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
    render() {
        const containerStyle = {
            position: 'relative',  
            width: '100%',
            height: '460px'
        }
      return (
        <Map google={this.props.google} initialCenter={{
            lat: 53.834208,
            lng: 27.580363
          }} containerStyle={containerStyle} zoom={14}>
          <Marker onClick={this.onMarkerClick}
                  name={'Current location'} />
          <InfoWindow onClose={this.onInfoWindowClose}>
          </InfoWindow>
        </Map>
      );
    }
  }
   
export default GoogleApiWrapper({
apiKey: ('AIzaSyCJ1vb6DeF_JZ7ZY39xq5oJucDCakedDoU')
})(MapContainer)