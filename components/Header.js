import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

const Header = props => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.text}</Text>;
    </View>
  );
};

Header.propTypes = {
  text: PropTypes.string
};

Header.defaultProps = {
  text: ''
};

export default Header;

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    paddingTop: 20,
    shadowColor: '#000',
    shadowOffset: { with: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: { fontSize: 20 }
};
