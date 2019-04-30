import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ReactList from 'react-list';
import PropTypes from 'prop-types';

import Card from '../Components/Card';
import { selectCity, unselectCity } from '../Redux/Actions';

const List = styled.div`
  max-height: 100vh;
  overflow: auto;
`;

class ScrollList extends PureComponent {
  static propTypes = {
    cities: PropTypes.array,
    selectCity: PropTypes.func,
    unselectCity: PropTypes.func,
  };

  handleSelect = id => {
    const { selectCity } = this.props;
    selectCity(id);
  };

  handleUnselect = id => {
    const { unselectCity } = this.props;
    unselectCity(id);
  };

  renderItem = (index, key) => {
    const { cities } = this.props;
    return (
      <Card
        key={key}
        city={cities[index]}
        onSelect={() => { this.handleSelect(cities[index].id) }}
        onUnselect={() => { this.handleUnselect(cities[index].id) }}
      />
    );
  };

  render() {
    const { cities } = this.props;

    return(
      <List>
        <ReactList
          itemRenderer={this.renderItem}
          length={cities.length}
          type='variable'
        />
      </List>
    );
  };
};

const mapStateToProps = state => ({
  cities: state.cities
});

const mapDispatchToProps = dispatch => ({
  selectCity: id => dispatch(selectCity(id)),
  unselectCity: id => dispatch(unselectCity(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScrollList);
