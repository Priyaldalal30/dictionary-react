import React, { useState } from "react";
import axios from "axios";

import "./Dictionary.css";

export default function Dictionary() {
  let [word, setWord] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
  }
  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);
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
