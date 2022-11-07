import React, { useState } from "react";

import "./Dictionary.css";

export default function Dictionary() {
  let [word, setWord] = useState(null);

  function search(event) {
    event.preventDefault();
    alert(`searching for ${word}`);
  }

  function handleWordChage(event) {
    setWord(event.target.value);
  }

  return (
    <div>
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Search"
          className="search-bar "
          onChange={handleWordChage}
        />
      </form>
    </div>
  );
}
