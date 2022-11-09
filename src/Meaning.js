import React from "react";

import "./Meaning.css";
import "./Responsive.css";

export default function Meaning(props) {
  return (
    <div>
      <h4 className="partOfSpeech">{props.meaning.partOfSpeech}</h4>
      <div className="definition">
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <div>{definition.definition}</div>
              <div className="example">{definition.example}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
