import { useState } from "react";
const URL = "https://rickandmortyapi.com/api/character/?name=";

export default function Search() {
  const [userSearch, setUserSearch] = useState("");
  const [character, setCharacter] = useState({});
  const [error, setError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`https://rickandmortyapi.com/api/character/?name=${userSearch}`)
      .then((response) => response.json())
      .then((response) => {
        setError(false);
        // console.log(response.results[0]);
        setCharacter(response.results[0]);
        setUserSearch("");
      })
      .catch((error) => {
        // console.log("imm in the catch");
        setError(true);
      });
  }
  //   console.log(!!Object.keys(character).length);
  return (
    <div>
      <h2>Search for character name:</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userSearch}
          id="search"
          onChange={(e) => setUserSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {!!Object.keys(character).length && !error && (
        <section>
          <h1>Name: {character.name}</h1>
          <p>Species: {character.species} </p>
          <p>Location: {character.location.name} </p>
          <img src={character.image}></img>
        </section>
      )}
      {error && <h2>Not Found!</h2>}
    </div>
  );
}
