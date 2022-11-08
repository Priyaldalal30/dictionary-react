import React from "react";

import "./Cards.css";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div>
      <h4 className="partOfSpeech">{props.meaning.partOfSpeech}</h4>
      <p className="definition">
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <div>{definition.definition}</div>
              <p className="example">
                <em>{definition.example}</em>
              </p>
            </div>
          );
        })}
      </p>
    </div>
  );
}
