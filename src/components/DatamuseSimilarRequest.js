function GetDatamuseSimilarToUrl(ml) {
    return `https://api.datamuse.com/words?${(new URLSearchParams({'ml': wordInput.value})).toString()}`;
}

function DatamuseSimilarRequest () {
    datamuseRequest( GetDatamuseSimilarToUrl(wordInput.value), (data) => {
        wordOutput.innerHTML = '';
        if (data.length) {
            outputDescription.innerHTML = `Words with a similar meaning to ${wordInput.value}`;
            data.forEach((item) => {
                wordOutput.innerHTML += `<li class="list-group-item">${item.word} </span><button onClick='addToSavedWords("${item.word}")' id='save-button' class='btn btn-sm btn-outline-success save' type=button>Save</button></li>`;
            });
        }
        else {
            outputDescription.innerHTML = '';
            wordOutput.innerHTML = '(no results)';
        }
    });
}

export default DatamuseSimilarRequest;