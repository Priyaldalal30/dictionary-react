import React from "react";

import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div>
      <h4 className="partOfSpeech">{props.meaning.partOfSpeech}</h4>
      <div className="definition">
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <div>{definition.definition}</div>
              <div className="example">
                <em>{definition.example}</em>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
