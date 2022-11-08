import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms[0].synonyms) {
    return (
      <ul>
        {props.synonyms[0].synonyms.map(function (synonym, index) {
          return (
            <li key={index}>
              <span className="synonyms"> {synonym}</span>
            </li>
          );
        })}
      </ul>
    );
  } else {
    return null;
  }
}
