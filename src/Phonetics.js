import React from "react";

export default function Phonetics(props) {
  const audio = new Audio(props.phonetics.audio);
  function playSound() {
    audio.play();
  }

  if (props.phonetics) {
    return (
      <div>
        <div className="audio">
          <button className="phonetic" onClick={playSound}>
            <i class="fa-regular fa-circle-play"></i>
          </button>
        </div>
        <div className="text">{props.phonetics.text}</div>
      </div>
    );
  }
}
