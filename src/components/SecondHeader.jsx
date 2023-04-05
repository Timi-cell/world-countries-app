import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { ThemeContext } from "../ThemeContext";
const SecondHeader = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <div className={`secondHeader ${isDarkMode ? "secondHeaderDark" : ""}`}>
      <div className="rowFlex">
        <Link to="/">
          <h1>Home</h1>
        </Link>
        <div onClick={toggleTheme}>
          <h6 style={{ fontWeight: "600", fontSize: "2rem" }}>
            {" "}
            <FontAwesomeIcon
              icon={faMoon}
              style={{ fontSize: "1.5rem", marginRight: "0.5rem" }}
            />
            {isDarkMode ? "Dark Mode" : "Light Mode"}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default SecondHeader;
