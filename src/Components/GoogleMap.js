import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';
import PropTypes from 'prop-types';

import { google } from '../config.json';

const { defaultLocation, zoom } = google;

const GoogleMapWrapper = withScriptjs(withGoogleMap(props =>
  <GoogleMap
    defaultZoom={zoom}
    defaultCenter={{ lat: defaultLocation.lat, lng: defaultLocation.lng }}
  >
    {props.cities.map(city => {
      if (city.hovered) {
        return (
          <Marker
            key={city.id}
            position={{ lat: city.latitude, lng: city.longitude }}
            animation={1}
          />
        );
      } else if (city.selected) {
        return (
          <Marker
            key={city.id}
            position={{ lat: city.latitude, lng: city.longitude }}
          />
        );
      }
      return (
        null
      );
    })}
  </GoogleMap>
));

GoogleMapWrapper.propTypes = {
  cities: PropTypes.array
}

export default GoogleMapWrapper;
