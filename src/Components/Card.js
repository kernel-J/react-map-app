import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Base = styled.div`
  padding: 10;
  border: 1px solid;
  background-color: ${props => (props.selected ? 'red' : 'white' )};
`

const Label = styled.div`
  font-family: Helvetica, sans-serif;
  font-weight: bold;
  margin: 10px;
`

const Card = (props) => {
  const { onSelect, onUnselect, city } = props;
  return (
    <Base 
      onMouseEnter={onSelect}
      onMouseLeave={onUnselect}
      selected={city.selected}
    >
      <Label>City: {city.city}</Label>
      <Label>Population: {city.population}</Label>
      <Label>State: {city.state}</Label>
    </Base>
  )
}

Card.propTypes = {
  onSelect: PropTypes.func,
  onUnselect: PropTypes.func,
  city: PropTypes.object
}

export default Card;
