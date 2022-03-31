const InputGroup = (props) => {
  const {
    inputValue,
    setInputValue,
    ShowRhymes,
    ShowSynonyms,
    keyDownHandler,
  } = props;

  return (
    <div className="input-group col">
      <input
        onKeyDown={keyDownHandler}
        className="form-control"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        type="text"
        placeholder="Enter a word"
      />
      <button onClick={ShowRhymes} className="btn btn-primary">
        Show rhyming words
      </button>
      <button onClick={ShowSynonyms} className="btn btn-secondary">
        Show synonyms
      </button>
    </div>
  );
};

export default InputGroup;
