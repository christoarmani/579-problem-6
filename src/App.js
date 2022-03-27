import logo from './logo.svg';
import './App.css';
import SavedWords from './components/SavedWords';
import InputGroup from './components/InputGroup';
import OutputDescription from './components/OutputDescription';
import WordOutput from './components/WordOutput';
import { useState } from 'react';


function App() {
  const [inputValue, setInputValue] = useState("");
  const [savedWordsArray, setSavedWordsArray] = useState([]);
  const [requestType, setRequestType] = useState("");
  const [dataMuseResults, setDataMuseResults] = useState([]);
  const [loadingMessage, setLoadingMessage] = useState("");
  const [resultsDescription, setResultsDescription] = useState("");

  return (
    <main className="container">
      <h1 className="row">Rhyme Finder (579 Problem Set 6)</h1>
      <h2>Your github code goes here</h2>
      <div className="row">
        <SavedWords savedWordsArray={savedWordsArray}/>
      </div>
      <div className="row">
        <InputGroup inputValue={inputValue} setInputValue={setInputValue} />
      </div>
      <div className="row">
        <OutputDescription />
      </div>
      <div className="output row">
        <WordOutput />
      </div>

      <div>  
        {inputValue}
      </div>

    </main>
  );
}

export default App;
