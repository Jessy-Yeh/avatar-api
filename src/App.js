import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(
    () =>
      axios
        .get(
          `https://last-airbender-api.herokuapp.com/api/v1/characters/random?count=6`
        )
        .then((res) => {
          setCharacters(res.data);
        }),
    []
  );

  return (
    <>
      <h1>Last Airbender Characters</h1>
      <ul className="character-list">
        {characters.map((character) => (
          <li className="character-card">
            <div>
              <img src={character.photoUrl}></img>
            </div>
            <p>
              Name: <span className="bold">{character.name}</span>
            </p>

            <p>
              Profession:{" "}
              <span className="bold">{character.profession || "none"}</span>
            </p>

            <p>
              Affiliation:{" "}
              <span className="bold">{character.affiliation || "none"}</span>
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
