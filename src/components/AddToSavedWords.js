// App.js is already creating savedWordsArray as state having this here could potentially
// cause all sorts of failures.
const savedWordsArray = [];

function AddToSavedWords(word) {
    // There's a variable called savedWords used several times.
    // It doesn't exist, so you'll crash as soon as AddToSavedWords
    // is callewd.
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
    // App.js has a setSavedWordsArray for updating the savedWordsArray state.
    // This savedWordsArray.push is doing nothing at best, but potentially
    // crashing the app.
    savedWordsArray.push(word);
}

AddToSavedWords();

export default AddToSavedWords;