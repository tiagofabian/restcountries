import React from 'react';
import SearchCountries from "../SearchCountries";
import "../../../assets/css/components/countries/structure/nav.css";

const Nav = ({ validateCountryByName }) => (
  <nav>
      <SearchCountries validateCountryByName={validateCountryByName} />
  </nav>
)

export default Nav;
