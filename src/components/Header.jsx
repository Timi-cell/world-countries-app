import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
const Header = ({ changeBg, bgState }) => {
  return (
    <div className={`header rowFlex  ${bgState ? "headerDark" : ""}`}>
      <h1>Where in the world?</h1>
      <div onClick={changeBg}>
        <h6 style={{ fontWeight: "600" }}>
          {" "}
          <FontAwesomeIcon
            icon={faMoon}
            style={{ fontSize: "1.5rem", marginRight: "0.5rem" }}
          />
          {bgState ? "Dark Mode" : "Light Mode"}
        </h6>
      </div>
    </div>
  );
};

export default Header;
