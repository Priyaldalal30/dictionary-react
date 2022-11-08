import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      <p>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <div className="definition">{definition.definition}</div>
              <p>
                <em>{definition.example}</em>
              </p>
            </div>
          );
        })}
      </p>
    </div>
  );
}
