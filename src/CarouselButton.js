import React from 'react';
import PropTypes from 'prop-types';

// START_HIGHLIGHT
const CarouselButton = props => <button {...props} />; //<callout id="co.spread-props" />
// END_HIGHLIGHT

CarouselButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CarouselButton;