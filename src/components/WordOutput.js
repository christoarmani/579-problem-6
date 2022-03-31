import { useEffect, useState } from "react";

function GroupBy(objects, property) {
  // If property is not a function, convert it to a function that accepts one argument (an object) and returns that object's
  // value for property (obj[property])
  if (typeof property !== "function") {
    const propName = property;
    property = (obj) => obj[propName];
  }

  const groupedObjects = new Map(); // Keys: group names, value: list of items in that group
  for (const object of objects) {
    const groupName = property(object);
    //Make sure that the group exists
    if (!groupedObjects.has(groupName)) {
      groupedObjects.set(groupName, []);
    }
    groupedObjects.get(groupName).push(object);
  }

  // Create an object with the results. Sort the keys so that they are in a sensible "order"
  const result = {};
  for (const key of Array.from(groupedObjects.keys()).sort()) {
    result[key] = groupedObjects.get(key);
  }
  return result;
}

function WordOutput(props) {
  const { dataMuseResults, savedWordsArray, setSavedWordsArray } = props;
  let words = [];

  const wordSyllables = GroupBy(dataMuseResults, "numSyllables");
  for (const [key] of Object.entries(wordSyllables)) {
    words.push(
      <div key={Math.random()}>
        {key != "undefined" ? <h3>Syllables {key}</h3> : ""}
        <ul>
          {wordSyllables[key].map((dataMuseResult) => (
            <li key={Math.random()}>
              {dataMuseResult.word}{" "}
              <button
                onClick={() => {
                  if (!savedWordsArray.includes(dataMuseResult.word)) {
                    setSavedWordsArray((savedWordsArray) => {
                      return savedWordsArray.concat([dataMuseResult.word]);
                    });
                  }
                }}
                className="btn btn-sm btn-outline-success save">
                Save
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  return <ul>{words}</ul>;
}

export default WordOutput;
