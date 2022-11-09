import React from "react";
import Meaning from "./Meaning";

import "./Results.css";
import "./Responsive.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="results">
        <div>
          {props.results.meanings.map(function (meaning, index) {
            return (
              <div className="resultCard" key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
