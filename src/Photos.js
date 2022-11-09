import React from "react";

import "./Photos.css";
import "./Responsive.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div>
        <div className="photo-grid">
          {props.photos.map(function (photo, index) {
            return (
              <div className="imageGrid" key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.landscape}
                    className="img-fluid image"
                    alt={photo.alt}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <img src="./header.jpg" alt="header" />
      </div>
    );
  }
}
