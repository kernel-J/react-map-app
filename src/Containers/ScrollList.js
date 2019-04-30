import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ReactList from 'react-list';
import PropTypes from 'prop-types';

import Card from '../Components/Card';
import { selectCity, noHover, onHover } from '../Redux/Actions';

const List = styled.div`
  max-height: 100vh;
  overflow: auto;
`;

class ScrollList extends PureComponent {
  static propTypes = {
    cities: PropTypes.array,
    selectCity: PropTypes.func,
    noHover: PropTypes.func,
    onHover: PropTypes.func
  };

  handleOnHover = id => {
    const { onHover } = this.props;
    onHover(id);
  };

  handleSelect = id => {
    const { selectCity } = this.props;
    selectCity(id);
  };

  handleNoHover = id => {
    const { noHover } = this.props;
    noHover(id);
  };

  renderItem = (index, key) => {
    const { cities } = this.props;
    return (
      <Card
        key={key}
        city={cities[index]}
        onSelect={() => { this.handleSelect(cities[index].id) }}
        noHover={() => { this.handleNoHover(cities[index].id) }}
        onHover={() => { this.handleOnHover(cities[index].id) }}
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
  noHover: id => dispatch(noHover(id)),
  onHover: id => dispatch(onHover(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScrollList);
