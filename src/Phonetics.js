import React from "react";

import "./Phonetics.css";

export default function Phonetics(props) {
  function playSound(sound) {
    const audio = new Audio(sound);
    audio.play();
  }
}
