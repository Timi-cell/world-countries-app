import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import * as DataArray from "../data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import Header from "./Header";
const Country = () => {
  const { code } = useParams();
  const [data, updateData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    updateData(DataArray.default);
  }, []);
  function goBack() {
    // go to the previous page
    navigate(-1);
  }
  function showLanguages(languages) {
    // display the country's languages
    if (languages) {
      let languageList = [];
      for (let language of languages) languageList.push(language.name);
      return languageList.join(", ");
    } else {
      return <p>No languages.</p>;
    }
  }
  function showCurrencies(currencies) {
    // display the country's currencies
    if (currencies) {
      let currencyList = [];
      for (let currency of currencies) {
        currencyList.push(`${currency.name} (${currency.symbol})`);
      }
      return currencyList.join(", ");
    } else {
      return <p>No currencies.</p>;
    }
  }
  function showBorderCountries(borderArr) {
    // display the country's border countries
    if (borderArr) {
      let borderCountries = [];
      let borderCountriesList = [];
      for (let border of borderArr) {
        borderCountries.push(border);
      }
      borderCountries.forEach((border) => {
        for (let value of data) {
          if (value.alpha3Code === border) borderCountriesList.push(value);
        }
      });
      return (
        <div style={{ display: "inline" }}>
          {borderCountriesList.map((borderCountry, index) => {
            return (
              <Link to={`/${borderCountry.alpha3Code}`} key={index}>
                <p className="border">{borderCountry.name}</p>
              </Link>
            );
          })}
        </div>
      );
    } else {
      return <p style={{ display: "inline" }}>No border countries.</p>;
    }
  }
  function formatNumber(number, index, increase = 4) {
    let stringedNumber = String(number);
    let arrayNum = stringedNumber.split("");
    if (arrayNum.length > 3) arrayNum.splice(index, 0, ",");
    if (arrayNum.length > 3 + increase)
      arrayNum.splice(index - increase, 0, ",");
    if (arrayNum.length > 3 + increase + increase)
      arrayNum.splice(index - increase - increase, 0, ",");
    if (arrayNum.length > 3 + increase + increase + increase)
      arrayNum.splice(index - increase - increase - increase, 0, ",");
    return arrayNum.join("");
  }
  function displayCountry() {
    let filteredData = data.filter((country) => country.alpha3Code === code);
    return (
      <div>
        {filteredData.map((country, index) => {
          return (
            <div key={index} className="countryDetail">
              <div className=" rowFlex backButton" onClick={goBack}>
                <FontAwesomeIcon
                  icon={faArrowLeftLong}
                  style={{ fontSize: "2rem" }}
                />
                <span style={{ marginLeft: "0.7rem", fontWeight: "600" }}>
                  Back
                </span>
              </div>
              <div className="detailBody rowFlex">
                <img src={country.flag} alt={country.demonym} />

                <div className="details">
                  <h2 style={{ fontWeight: "800", fontSize: "4rem" }}>
                    {country.name}
                  </h2>
                  <div className="detailsContent rowFlex marginTop">
                    <div>
                      <p>
                        <span>Native Name:</span> {country.nativeName}{" "}
                      </p>
                      <p>
                        <span>Population:</span>{" "}
                        {formatNumber(country.population, -3)}
                      </p>
                      <p>
                        <span>Region:</span> {country.region || "No region"}{" "}
                      </p>
                      <p>
                        <span>Sub Region:</span>{" "}
                        {country.subregion || "No subregion"}{" "}
                      </p>
                      <p>
                        <span>Capital:</span> {country.capital || "No capital"}{" "}
                      </p>
                    </div>
                    <div>
                      <p>
                        <span>Top Level Domain:</span> {country.topLevelDomain}
                      </p>
                      <p>
                        <span>Currencies:</span>{" "}
                        {showCurrencies(country.currencies)}
                      </p>
                      <p>
                        <span>Languages:</span>{" "}
                        {showLanguages(country.languages)}
                      </p>
                    </div>
                  </div>
                  <div className="marginTop">
                    <span>Border Countries</span>{" "}
                    {showBorderCountries(country.borders)}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  return (
    <div>
      <Header />
      {displayCountry()}
    </div>
  );
};

export default Country;
