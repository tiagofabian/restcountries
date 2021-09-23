import React from 'react';
import "../../assets/css/components/countries/cardCountries.css";

const cardCountries = ({ countries }) => (
    <div className="cards">
        {countries && countries
            .map((countrie, index) => {
                const { capital, flag, name, region, borders, languages, currencies } = countrie;
                const nativeLang = languages.map(language => language.nativeName).find(l => l);
                const currencie = currencies.map(currencie => ({name: currencie.name, symbol: currencie.symbol})).find(c => c);
                const frontiers = borders.map(border => `${border}, `)

                return(
                    <div key={index} className="container">
                        <ul className="elements">
                            <li><div className="bandera"><img src={flag} alt="img" /></div></li>
                            <li className="label"><strong>Name: </strong>{name}</li>
                            <li className="label"><strong>Capital: </strong>{capital}</li>
                            <li className="label"><strong>Region: </strong>{region }</li> 
                            <li className="label"><strong>Lengua: </strong>{nativeLang}</li>
                            <li className="label"><strong>Moneda: </strong>{currencie.name}<strong> Simbolo: </strong>{currencie.symbol}</li>
                            <li className="label"><strong>Paises Limitrofes: </strong>{frontiers}</li>
                        </ul>
                    </div>
                );
            })
        }
    </div>
);

export default cardCountries;
