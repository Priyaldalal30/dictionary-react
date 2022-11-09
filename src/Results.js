import React from "react";
import Meaning from "./Meaning";
import Synonyms from "./Synonyms";
import Phonetics from "./Phonetics";

import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="results">
        <h3 className="word">{props.results.word}</h3>

        <span className="audio">
          <div>
            <Phonetics phonetics={props.results.phonetics} />
          </div>
        </span>
        <div className="synonyms">
          <Synonyms synonyms={props.results.meanings} />
        </div>
        <div className="grid">
          <div className="col1">
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
          <div className="col2">
            <div className="pictures">Pictures</div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
