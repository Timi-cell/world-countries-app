import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const Input = ({ bgState, filterCountries }) => {
  return (
    <div className={`input rowFlex ${bgState ? "inputDark" : ""}`}>
      <label htmlFor="input">
        <FontAwesomeIcon
          icon={faSearch}
          style={{
            fontSize: "1.7rem",
            color: `${bgState ? "white" : "hsl(0, 0%, 52%)"}`,
          }}
        />
      </label>
      <input
        id="input"
        type="text"
        placeholder="Search for a country by it's name or capital..."
        onChange={filterCountries}
        spellCheck="false"
      />
    </div>
  );
};

export default Input;
