import React from "react";

import "./Phonetics.css";

export default function Phonetics(props) {
  function playSound(sound) {
    const audio = new Audio(sound);
    audio.play();
  }

  if (props.phonetics) {
    return props.phonetics.map((el) => {
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
    });
  }
}
