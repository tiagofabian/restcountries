import React from 'react';
import "../../assets/css/components/countries/searchCountries.css";

const searchCountries = ({ validateCountryByName, countries, doneFetch}) => (
    <div className="searchPanel">
        <div className="search">
            <input
                type="text"
                id="inputSearch"
                placeholder=" Buscar"
            />
            <button
                type="button"
                onClick={e => validateCountryByName(e)}
            >
                Search
            </button>
        </div>
    </div>
);

export default searchCountries;
