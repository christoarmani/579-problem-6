const savedWordsArray = [];

function AddToSavedWords(word) {
    if (savedWordsArray.length === 0 ) {
        savedWords.innerHTML = `(none)`;
    }
    else if (savedWordsArray.length === 1 ) {
        savedWords.innerHTML = null;
        savedWords.append(word);
    }
    else {
        savedWords.append(", " + word);
    }
    savedWordsArray.push(word);
}

AddToSavedWords();

export default AddToSavedWords;