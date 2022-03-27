// move add to saved words here


const SavedWords = (props) => {
    // All you need here is savedSetWordsArray. You're not
    // changing its value here, just displaying it.
    const {savedWordsArray, setSavedWordsArray, word} = props;
    // console.log(props);

    // You don't need a button handler here, there's no button! 🙂
    // This is just displaying something that was set elsewhere.
    const buttonHandler = (event) => {
        // This seems to be declaring a new function variable
        // without adding a const or let, so it's going to fail
        // I commented it because it was stopping the app from
        // compiling.
        // AddToSavedWords = () => {
        //     if (savedWordsArray.length === 0 ) {
        //         console.log(savedWordsArray.length)
        //         return 'none';
        //     }

        // else if (savedWordsArray.length === 1 ) {
        //     savedWordsArray(null);
        //     setSavedWordsArray.append(word);
        // }
        // else {
        //     setSavedWordsArray.append(", " + word);
        // }
        // setSavedWordsArray.push(word);
    }

    // Commented away the line below because it's calling a
    // function that doesn't exist.
    //AddToSavedWords();

    // All you really need to do *here* is display an array of saved words
    // If I was asked to do that back when I was paid to write JS without
    // having been taught it, I'd search for something like
    // "js array to comma separated string"

    return (
        // do something here
        <div className="col">Saved words: </div>
)}
// had to remove an extra curly brace 👆 so it would work.
export default SavedWords;