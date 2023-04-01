import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
const Header = ({ changeBg, bgState }) => {
  return (
    <div className={`header ${bgState ? "headerDark" : ""}`}>
      <div className="rowFlex">
        <Link to="/">
          <h1>Home</h1>
        </Link>
        <div onClick={changeBg}>
          <h6 style={{ fontWeight: "600", fontSize: "2rem" }}>
            {" "}
            <FontAwesomeIcon
              icon={faMoon}
              style={{ fontSize: "1.5rem", marginRight: "0.5rem" }}
            />
            {bgState ? "Dark Mode" : "Light Mode"}
          </h6>
        </div>
      </div>
      <h2 style={{ textAlign: "center", marginBottom:"1rem" }} className="marginTop">
        Where in the world?
      </h2>
    </div>
  );
};

export default Header;
