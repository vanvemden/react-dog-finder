import React from "react";

function DogList({ dogs }) {

  return (
    <div className="DogList">
      <h1>Dog List</h1>
      <ul>
        {dogs.map((dog, idx) =>
          <li key={idx}>
            Name: {dog.name}, Age: {dog.age}
          </li>
        )}
      </ul>
    </div >
  );
}

export default DogList;