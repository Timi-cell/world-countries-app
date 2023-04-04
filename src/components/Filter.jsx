import React from "react";
const Filter = ({ bgState, filterByRegion }) => {
  return (
    <div
      className={`filterRegion rowFlex ${bgState ? "filterRegionDark" : ""}`}
      onClick={filterByRegion}
    >
      <select className="select" id="select">
        <option value="">All Continents</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default Filter;
