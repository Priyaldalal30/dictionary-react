import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms.length > 0) {
    return (
      <ul>
        {props.synonyms.map(function (synonym, index) {
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
