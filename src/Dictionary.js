import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

import "./Dictionary.css";

export default function Dictionary() {
  let [word, setWord] = useState("");
  let [results, setResult] = useState(null);

  function handleResponse(response) {
    setResult(response.data[0]);
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
      <form className="s" onSubmit={search}>
        <div class="s">
          <input
            type="search"
            placeholder="Search"
            id="search"
            name="search"
            className="search-bar "
            onChange={handleWordChage}
          />
        </div>
      </form>
      <div className="results">
        <Results results={results} />
      </div>
    </div>
  );
}
