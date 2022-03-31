import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import InputGroup from "./components/InputGroup";
import OutputDescription from "./components/OutputDescription";
import WordOutput from "./components/WordOutput";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [savedWordsArray, setSavedWordsArray] = useState([]);
  const [dataMuseResults, setDataMuseResults] = useState([]);
  const [resultsDescription, setResultsDescription] = useState("");
  const [isNoResult, setIsNoResult] = useState(false);

  const keyDownHandler = (event) => {
    if (event.key === "Enter") {
      ShowRhymes();
    }
  };

  const ShowRhymes = () => {
    setResultsDescription("...loading");
    setDataMuseResults([]);
    fetch(
      `https://api.datamuse.com/words?${new URLSearchParams({
        rel_rhy: inputValue,
      }).toString()}`
    )
      .then((response) => response.json())
      .then((json) => {
        if (json.length) {
          setDataMuseResults(json);
          setResultsDescription(`Words that rhyme with ${inputValue}`);
          setIsNoResult(false);
        } else {
          setIsNoResult(true);
        }
      });
  };

  const ShowSynonyms = () => {
    setResultsDescription("...loading");
    setDataMuseResults([]);
    fetch(
      `https://api.datamuse.com/words?${new URLSearchParams({
        ml: inputValue,
      }).toString()}`
    )
      .then((response) => response.json())
      .then((json) => {
        if (json.length) {
          setDataMuseResults(json);
          setResultsDescription(`Words with a meaning similar to ${inputValue}`);
          setIsNoResult(false);
        } else {
          setIsNoResult(true);
        }
      });
  };

  return (
    <main className="container">
      <h1 className="row">Rhyme Finder (579 Problem Set 6)</h1>
      <h2>Your github code goes here</h2>
      <div className="row">
        <div className="col">Saved words: {savedWordsArray.length ? savedWordsArray.join(", ") : "none" }</div>
      </div>
      <div className="row">
        <InputGroup
          keyDownHandler={keyDownHandler}
          ShowRhymes={ShowRhymes}
          ShowSynonyms={ShowSynonyms}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
      </div>

      {isNoResult ? ("(no results)") : (
        <div>
          <div className="row">
            <OutputDescription resultsDescription={resultsDescription} />
          </div>
          <div className="output row">
            <WordOutput
              savedWordsArray={savedWordsArray}
              setSavedWordsArray={setSavedWordsArray}
              dataMuseResults={dataMuseResults}
            />
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
