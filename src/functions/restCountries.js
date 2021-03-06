const base_url = "https://restcountries.eu/rest/v2";

// params
const fullText = "?fullText="; // bool

// endpoints
const allEP = "/all";
const nameEP = "/name/";
const codeEP = "/alpha/";
const currencyEP = "/currency/";
const languageEP = "/lang/";
const capitalCityEP = "/capital/";
const callingCodeEp = "/callingcode/";
const regionEP = "/region/";
const regionalBlocEP = "regionalbloc";

// endpoints method
export const allCountries = () => `${base_url}${allEP}`;
export const countryByName = (country) => `${base_url}${nameEP}${country}`;
export const countryByFullName = (country, bool) => `${base_url}${nameEP}${country}${fullText}${bool}`;
export const countryByCode = (code) => `${base_url}${codeEP}${code}`;
export const isoCurrencyByName = (currency) => `${base_url}${currencyEP}${currency}`;
export const isoLanguageByName = (lang) => `${base_url}${languageEP}${lang}`;
export const capitalCityByName = (capital) => `${base_url}${capitalCityEP}${capital}`;
export const callingCodeByCode = (callingCode) => `${base_url}${callingCodeEp}${callingCode}`;
export const regionByName = (region) => `${base_url}${regionEP}${region}`;
export const regionalBlockByName = (regionalBloc) => `${base_url}${regionalBlocEP}${regionalBloc}`;