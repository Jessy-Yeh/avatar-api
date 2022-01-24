import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(
    () =>
      axios
        .get(
          `https://last-airbender-api.herokuapp.com/api/v1/characters/random?count=5`
        )
        .then((res) => {
          setCharacters(res.data);
        }),
    []
  );

  return (
    <>
      <h1>Last Airbender Character</h1>
      <ul>
        {characters.map((character) => (
          <li>
            <img src={character.photoUrl}></img>
            <p>Name: {character.name}</p>
            <p>Profession: {character.profession || "none"}</p>
            {character.affiliation ? (
              <p>Affiliation: {character.affiliation}</p>
            ) : null}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
