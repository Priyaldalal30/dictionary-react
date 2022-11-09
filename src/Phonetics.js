import React, { Fragment } from "react";

import "./Phonetics.css";
import "./Responsive.css";

export default function Phonetics(props) {
  function playSound(sound) {
    const audio = new Audio(sound);
    audio.play();
  }

  if (props.phonetics) {
    return props.phonetics.map((el) => {
      if (el.audio?.length > 0 && el.text?.length > 0) {
        return (
          <div>
            <div className="audio">
              <button className="phonetic" onClick={() => playSound(el.audio)}>
                {" "}
                <i class="fa-regular fa-circle-play">
                  {" "}
                  <span className="text"> {el.text}</span>
                </i>
              </button>
            </div>
          </div>
        );
      } else return <Fragment />;
    });
  }
}
