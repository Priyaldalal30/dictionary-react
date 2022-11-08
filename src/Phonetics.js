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
              <i class="fa-regular fa-circle-play"></i>
            </button>
          </div>
          <div className="text">{el.text}</div>
        </div>
      );
    });
  }
}
