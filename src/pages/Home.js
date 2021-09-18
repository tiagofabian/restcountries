import React, {Fragment} from 'react';
import Header from "../components/countries/structure/Header";
import Nav from "../components/countries/structure/Nav";
import Section from "../components/countries/structure/Section";
import Footer from "../components/countries/structure/Footer";

const Home = ({ countries, doneFetch, text, validateCountryByName }) => (
    <Fragment>
        <Header />
        <Nav validateCountryByName={validateCountryByName} />
        <Section countries={countries} doneFetch={doneFetch} text={text} />
        <Footer />
    </Fragment>
);


export default Home;
