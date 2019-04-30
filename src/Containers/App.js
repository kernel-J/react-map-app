import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { fetchCities } from '../Redux/Actions';
import ScrollList from './ScrollList';


const Page = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;
`;

const List = styled.div`
  width: 30%;
  padding: 0.5em;
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
        <List>
          <ScrollList />
        </List>
        </Map>
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
