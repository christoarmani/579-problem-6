import { useState } from 'react';


const InputGroup = (props) => {

    const {inputValue, setInputValue} = props;
    const {requestType, setRequestType} = props;
    const {dataMuseResults, setDataMuseResults} = props;
    const {loadingMessage, setLoadingMessage} = props;
    const {resultsDescription, setResultsDescription} = props;

    const DatamuseRequest = () => {
        fetch(`https://api.datamuse.com/words?${(new URLSearchParams({[requestType]: inputValue})).toString()}`)
        .then((response) => response.json())
        .then((json) => {
            setLoadingMessage('');
            setDataMuseResults(json);
            if (requestType === 'ml') {
                setResultsDescription(`Words with a meaning similar to ${inputValue}`);
                console.log(setResultsDescription)
            } else if (requestType === 'rel_rhy') {
                setResultsDescription(`Words that rhyme with ${inputValue}`);
            }
        });
    }

    const ShowRhymes = () => {
        DatamuseRequest({['ml']: inputValue});
    }

    const ShowSynonyms = () => {
        DatamuseRequest({['rel_rhy']: inputValue});
    }

    return (
    <div className="input-group col">
        <input
            onKeyDown={ShowRhymes}
            className="form-control"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            type="text"
            placeholder="Enter a word"
        />
        <button onClick={ShowRhymes}>Show rhyming words</button>
        <button onClick={ShowSynonyms}>Show synonyms</button>
    </div>
    );
}

export default InputGroup;