import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { fetchCities } from '../Redux/Actions';


const Page = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;
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
    return (
      <Page>
      </Page>
    );
  };
};


const mapDispatchToProps = dispatch => ({
  fetchCities: () => dispatch(fetchCities())
});

export default connect(
  null,
  mapDispatchToProps
)(App);
