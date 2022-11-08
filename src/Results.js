import React from "react";
import Meaning from "./Meaning";
import Synonyms from "./Synonyms";

import "./Cards.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="results">
        <h3 className="word">{props.results.word}</h3>
        <h6>
          <Synonyms synonyms={props.results.meanings} />
        </h6>
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
