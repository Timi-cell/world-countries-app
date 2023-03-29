import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const Input = ({ bgState }) => {
  return (
    <div className={`input rowFlex ${bgState ? "inputDark" : ""}`}>
      <FontAwesomeIcon
        icon={faSearch}
        style={{
          fontSize: "1.7rem",
          color: `${bgState ? "white" : "hsl(0, 0%, 52%)"}`,
        }}
      />
      <input type="text" placeholder="Search for a country..." />
    </div>
  );
};

export default Input;
