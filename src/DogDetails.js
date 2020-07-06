import React from "react";
import { useParams } from "react-router-dom";

function DogDetails({ dogs }) {
  const { name } = useParams();
  const dog = dogs.find(dog => dog.src === name);

  return (
    <div>
      <h1>Dog Details</h1>
      <ul>
        <li>Name: {dog.name}</li>
        <li>Age: {dog.age}</li>
        <ol>
          {dog.facts.map((fact, idx) =>
            <li key={idx}>
              {fact}
            </li>
          )}
        </ol>
        <li>
          <img src={`/img/${dog.src}.jpg`} alt="" />
        </li>
      </ul>
    </div>

  )

}



export default DogDetails;