import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import Synonyms from "./Synonyms";

import "./Dictionary.css";
import "./Responsive.css";
import Phonetics from "./Phonetics";

export default function Dictionary() {
  let [word, setWord] = useState("");
  let [results, setResult] = useState(null);
  let [photos, setPhotos] = useState([]);
  let [phonetics, setPhonetics] = useState([]);
  let [synonyms, setSynonyms] = useState([]);
  let [title, setTitle] = useState("");

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function handleResponse(response) {
    setResult(response.data[0]);
    setPhonetics(response.data[0].phonetics);
    setSynonyms(response.data[0].meanings[0].synonyms);
    setTitle(response.data[0].word);
  }
  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);

    let apiPexelsKey =
      "563492ad6f91700001000001a5befe3c3db143ddbf0a7ea562ee1991";
    let apiPexelsUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=6`;
    axios
      .get(apiPexelsUrl, {
        headers: { Authorization: `Bearer ${apiPexelsKey}` },
      })
      .then(handlePexelsResponse);
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
        <h3 className="word">{title}</h3>
        <Phonetics phonetics={phonetics} />
        <Synonyms synonyms={synonyms} />
        <div className="main-grid">
          <div className="writing">
            <Results results={results} />
          </div>
          <div className="picture">
            <Photos photos={photos} />
          </div>
        </div>
      </div>
    </div>
  );
}
