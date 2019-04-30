import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { fetchCities } from '../Redux/Actions';
import GoogleMapWrapper from '../Components/GoogleMap';
import ScrollList from './ScrollList';
import { google } from '../config.json';

const { api } = google;

const Page = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;
`;

const List = styled.div`
  width: 30%;
  padding: 0.5em;
`;

const Map = styled.div`
  width:70%;
`;

class App extends Component {
  static propTypes = {
    fetchCities: PropTypes.func
  }

  componentDidMount() {
    const { fetchCities } = this.props;
    fetchCities();
  }

  render() {
    const { cities } = this.props;

    return (
      <Page>
        <List>
          <ScrollList />
        </List>
        <Map>
          <GoogleMapWrapper
            cities={cities}
            googleMapURL={api}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </Map>
      </Page>
    );
  };
};

const mapStateToProps = state => ({
  cities: state.cities
});

const mapDispatchToProps = dispatch => ({
  fetchCities: () => dispatch(fetchCities())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
