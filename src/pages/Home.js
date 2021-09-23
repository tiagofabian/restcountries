import React, { Fragment, useState, useEffect } from 'react';
import { countryByName } from "../functions/restCountries";
import Header from "../components/countries/structure/Header";
import Nav from "../components/countries/structure/Nav";
import Section from "../components/countries/structure/Section";
import Footer from "../components/countries/structure/Footer";

const Home = () => {
    const [countries, setCountries] = useState([]);
    const [doneFetch, setDoneFetch] = useState(true);
    const [text, setText] = useState("Busca un pais por nombre Ej: 'Brazil'");

    useEffect(() => {

    }, []);

    const getCountryByName = name => {
         fetch(countryByName(name))
            .then(res => res.json())
            .then(data => {
                setDoneFetch(true);
                setCountries(data);
                if (data.status === 404) {
                    setText(`404 ${data.message}: Pais no encontrado`);
                }
            })
            .catch(err => console.log(err));
    };

    const validateCountryByName = (e,
        country_name = document.querySelector("#inputSearch").value.toLowerCase()
      ) => {
        if (e.type === "keypress" && e.key !== "Enter") return;
        const words = country_name.match(/\w+/g);
        country_name = words && words.join(" ");
        if (typeof country_name === "string" && e.type === "click") {
          setCountries([]);
          setDoneFetch(false);
          getCountryByName(country_name);
        }
    };

    return (
        <Fragment>
            <Header />
            <Nav validateCountryByName={validateCountryByName} />
            <Section countries={countries} doneFetch={doneFetch} text={text} />
            <Footer />
        </Fragment>
    );
};


export default Home;
