import React from "react";
import { Link } from "react-router-dom";
const Countries = ({ array, formatNumber }) => {
  if (array) {
    return (
      <div className="countries rowFlex">
        {array.map((country, index) => {
          return (
            <div className="card" key={index}>
              <Link to={`/${country.alpha3Code}`}>
                <img src={country.flag} alt={country.demonym} />
                <div className="card__info">
                  <h2 id="name">{country.name}</h2>
                  <div>
                    <p>
                      <span>Population</span>:{" "}
                      {formatNumber(country.population, -3)}
                    </p>
                    <p>
                      <span>Region</span>: {country.region}
                    </p>
                    <p>
                      <span>Capital</span>: {country.capital || "No capital"}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    );
  } else {
    return <h2>Country Not Found!</h2>;
  }
};

export default Countries;
