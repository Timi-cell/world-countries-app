import React from "react";
import { Link } from "react-router-dom";
const Countries = ({ filtered }) => {
  if (filtered.length === 0) {
    return (
      <h2
        style={{
          textAlign: "center",
          marginTop: "5rem",
        }}
      >
        Country Not Found!
      </h2>
    );
  } else {
    return (
      <div className="countries rowFlex">
        {filtered.map((country, index) => {
          return (
            <div className="card" key={index}>
              <Link to={`/countries/${country.alpha3Code}`}>
                <img src={country.flag} alt={country.demonym} />
                <div className="card__info">
                  <h2 id="name">{country.name}</h2>
                  <div>
                    <p>
                      <span>Population</span>:{" "}
                      {country.population.toLocaleString("en-US")}
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
  }
};

export default Countries;
