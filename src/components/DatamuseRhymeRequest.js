import DatamuseRequest from './DatamuseRequest';
import GetDatamuseRhymeUrl from './GetDatamuseRhymeUrl';

function GetDatamuseRhymeUrl(rel_rhy) {
    return `https://api.datamuse.com/words?${(new URLSearchParams({'rel_rhy': wordInput.value})).toString()}`;
}


function DatamuseRequest(url, callback) {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            // This invokes the callback that updates the page.
            callback(data);
        }, (err) => {
            console.error(err);
        });
}

function GroupBy(objects, property) {
    // If property is not a function, convert it to a function that accepts one argument (an object) and returns that object's
    // value for property (obj[property])
    if(typeof property !== 'function') {
        const propName = property;
        property = (obj) => obj[propName];
    }

    const groupedObjects = new Map(); // Keys: group names, value: list of items in that group
    for(const object of objects) {
        const groupName = property(object);
        //Make sure that the group exists
        if(!groupedObjects.has(groupName)) {
            groupedObjects.set(groupName, []);
        }
        groupedObjects.get(groupName).push(object);
    }

    // Create an object with the results. Sort the keys so that they are in a sensible "order"
    const result = {};
    for(const key of Array.from(groupedObjects.keys()).sort()) {
        result[key] = groupedObjects.get(key);
    }
    return result;
}

function DatamuseRhymeRequest () {
    DatamuseRequest( GetDatamuseRhymeUrl(wordInput.value), (data) => {
        wordOutput.innerHTML = '';
        if (data != null && data.length != 0) {
        const wordSyllables = GroupBy (data, "numSyllables");
            for (const [key, value] of Object.entries(wordSyllables)) {
                outputDescription.innerHTML = `Words that rhyme with ${wordInput.value}`;

                wordOutput.innerHTML += `<h3>Syllables ${key}</h3>`;
                value.forEach((item) => {
                    wordOutput.innerHTML += `<li className="list-group-item">${item.word} </span><button onClick='addToSavedWords("${item.word}")' id='save-button' className='btn btn-sm btn-outline-success save' type=button>Save</button></li>`;
                });
            }
        }
        else {
            outputDescription.innerHTML = '';
            wordOutput.innerHTML = '(no results)';
        }
    });
}

export default DatamuseRhymeRequest;