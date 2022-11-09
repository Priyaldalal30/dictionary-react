import React from "react";

import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="resultCard">
        <div className="photo-grid">
          {props.photos.map(function (photo, index) {
            return (
              <a href={photo.src.original} target="_blank" rel="noreferrer">
                <img
                  src={photo.src.landscape}
                  className="img-fluid imageLink"
                  key={index}
                  alt={photo.alt}
                />
              </a>
            );
          })}
        </div>
      </div>
    );
  }
}
