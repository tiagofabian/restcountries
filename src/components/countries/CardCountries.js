import React from 'react';
import "../../assets/css/components/countries/cardCountries.css";

const cardCountries = ({ countries }) => (
    <div className="cards">
        {countries && countries
            .map((countrie, index) => {
                const { capital, name, region, topLevelDomain, alpha2Code, alpha3Code, callingCodes, altSpellings} = countrie;
                const spellings = altSpellings.map(altSpelling => `${altSpelling} - `);
                const domains = topLevelDomain.map(domain => `${domain} `);
                const callCodes = callingCodes.map(callCode => `${callCode} `);
                //const nativeLang = languages.map(language => language.nativeName).find(l => l);
                //const currencie = currencies.map(currencie => ({name: currencie.name, symbol: currencie.symbol})).find(c => c);
                //const frontiers = borders.map(border => `${border}, `)

                return(
                    <div key={index} className="container">
                        <ul className="elements">
                            <li className="label"><strong>Name: </strong>{name}</li>
                            <li className="label"><strong>Capital: </strong>{capital}</li>
                            <li className="label"><strong>Region: </strong>{region}</li>
                            <li className="label"><strong>Codigos Area: </strong>{callCodes}</li>
                            <li className="label"><strong>Dominio: </strong>{domains}</li>
                            <li className="label"><strong>Codigo Alfabetico 1: </strong>{alpha2Code}</li>
                            <li className="label"><strong>Codigo Alfabetico 2: </strong>{alpha3Code}</li>
                            <li className="label"><strong>Ortografia: </strong>{spellings}</li>
                        </ul>
                    </div>
                );
            })
        }
    </div>
);

export default cardCountries;
