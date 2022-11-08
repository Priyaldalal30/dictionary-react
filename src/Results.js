import React from "react";
import Meaning from "./Meaning";

import "./Cards.css";

export default function Results(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div className="results">
        <h3 className="word">{props.results.word}</h3>
        <p>
          {props.results.meanings.map(function (meaning, index) {
            return (
              <div className="resultCard" key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          })}
        </p>
      </div>
    );
  } else {
    return null;
  }
}
