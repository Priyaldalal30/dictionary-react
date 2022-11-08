import React from "react";
import Meaning from "./Meaning";
import Synonyms from "./Synonyms";
import Phonetics from "./Phonetics";

import "./Cards.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="results">
        <h3 className="word">{props.results.word}</h3>
        <div className="resultCard">
          <div className="grid">
            <div className="audio">
              <Phonetics phonetics={props.results.phonetics} />
            </div>
            <div className="synonyms">
              <Synonyms synonyms={props.results.meanings} />
            </div>
          </div>
        </div>
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
