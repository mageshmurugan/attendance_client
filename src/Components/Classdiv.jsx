import React from "react";
import { Link } from "react-router-dom";

function Classdiv({ classes: c }) {
  return (
    <Link
      to={{
        pathname: "/courses",
        state: { c },
      }}
    >
      <div>
        <h3>{c.year}</h3>
        <h3>{c.section}</h3>
        <h3>{c.department}</h3>
        <h3>{c.expectedTotalHours}</h3>
        <h3>{c.finishedHours}</h3>
      </div>
    </Link>
  );
}

export default Classdiv;
