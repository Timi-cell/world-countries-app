import React from "react";
import { Link } from "react-router-dom";
const PageNotFound = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "5rem" }}>
      <h1>Page Not Found!</h1>
      <Link to="/">
        <h2 style={{ marginTop: "3rem", textDecoration:"underline" }}>Go Home</h2>
      </Link>
    </div>
  );
};

export default PageNotFound;
