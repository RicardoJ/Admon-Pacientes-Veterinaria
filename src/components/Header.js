import React from "react";
import PropTypes from 'prop-types';

const Header = ({titleHeader}) => (
  <header>
    <h1 className= "text-center">{titleHeader}</h1>
  </header>
);
Header.propTypes ={
  titleHeader: PropTypes.string.isRequired
}
export default Header;
