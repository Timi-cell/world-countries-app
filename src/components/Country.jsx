import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
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
    let languageList = [];
    for (let language of languages) languageList.push(language.name);
    return languageList;
  }
  function showCurrencies(currencies) {
    // display the country's currencies
    let currencyList = [];
    for (let currency of currencies) {
      currencyList.push(`${currency.name} (${currency.symbol})`);
    }
    return currencyList;
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
              <p key={index} style={{ display: "inline" }}>
                {borderCountry.name}
              </p>
            );
          })}
        </div>
      );
    } else {
      return <p style={{ display: "inline" }}>No border countries</p>;
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
                <span style={{ marginLeft: "0.7rem" }}>Back</span>
              </div>
              <div className="detailBody rowFlex">
                <img src={country.flag} alt={country.demonym} />

                <div className="details">
                  <h2 style={{ fontWeight: "800", fontSize: "3rem" }}>
                    {country.name}
                  </h2>
                  <div
                    className="rowFlex marginTop"
                    style={{ alignItems: "flex-start" }}
                  >
                    <div>
                      <p>Native Name: {country.nativeName} </p>
                      <p>Population: {formatNumber(country.population, -3)}</p>
                      <p>Region: {country.region} </p>
                      <p>Sub Region: {country.subregion} </p>
                      <p>Capital: {country.capital} </p>
                    </div>
                    <div>
                      <p>Top Level Domain: {country.topLevelDomain}</p>
                      <p>
                        Currencies:{" "}
                        {showCurrencies(country.currencies).join(", ")}
                      </p>
                      <p>
                        Languages: {showLanguages(country.languages).join(", ")}
                      </p>
                    </div>
                  </div>
                  <div className="marginTop rowFlex">
                    Border Countries: {showBorderCountries(country.borders)}
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
