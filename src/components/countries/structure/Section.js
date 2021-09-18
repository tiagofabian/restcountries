import React from 'react';
import CardCountries from "../CardCountries";
import Message from "../../forms/Message";
import Loader from "../../forms/Loader";
import "../../../assets/css/components/countries/structure/section.css";

const Section = ({ countries, doneFetch, text }) => {
    return (
        <section>
            {doneFetch ? (
                countries.length ? (
                    <CardCountries countries={countries} />
                ) : (
                    <Message text={text} />
                )
            ) : (
                <Loader />
            )}
        </section>
    )
}

export default Section;
