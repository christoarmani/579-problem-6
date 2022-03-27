// move add to saved words here


const SavedWords = (props) => {
    const {savedWordsArray, setSavedWordsArray, word} = props;
    // console.log(props);

    const buttonHandler = (event) => {
        AddToSavedWords = () => {
            if (savedWordsArray.length === 0 ) {
                console.log(savedWordsArray.length)
                return 'none';
            }
        // else if (savedWordsArray.length === 1 ) {
        //     savedWordsArray(null);
        //     setSavedWordsArray.append(word);
        // }
        // else {
        //     setSavedWordsArray.append(", " + word);
        // }
        // setSavedWordsArray.push(word);
    }

    AddToSavedWords();

    return (
        // do something here
        <div className="col">Saved words: </div>
)}}

export default SavedWords;