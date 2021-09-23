import React, { Suspense, lazy } from 'react';
import Message from "../../forms/Message";
import Loader from "../../forms/Loader";
import "../../../assets/css/components/countries/structure/section.css";
import giphy from "../../../assets/img/loader.gif"
const CardCountries = lazy(() => import("../CardCountries"));

const Section = ({ countries, doneFetch, text }) => (
    <section>
        {doneFetch ? (
            countries.length ? (
                <Suspense fallback={
                    <div>
                        <img src={giphy} alt="img"/>
                    </div>
                }>
                    <CardCountries countries={countries} />
                </Suspense>
            ) : (
                <Message text={text} />
            )
        ) : (
            <Loader />
        )}
    </section>
);

export default Section;
