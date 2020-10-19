import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const API_PO_KE =
  "https://pokeapi.co/api/v2/pokemon?fbclid=IwAR0B-qsNtOrApiurXXHa3iOv5O1HUyQ9zCyFFkDvR7QJOr642B7muZAeyf4";
const API_PO_KE2 = "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20";

function PokemonDataFetch() {
  const [pokesData, setPokesData] = useState([]);
  const [Loading, setLoading] = useState(false);

  const FetchData = async () => {
    setLoading(true);
    fetch(API_PO_KE)
      .then((show_data) => show_data.json())
      .then((data) => setPokesData(data.results))
      .finally(setLoading(false));
  };

  const FetchData2 = async () => {
    setLoading(true);
    fetch(API_PO_KE2)
      .then((show_data) => show_data.json())
      .then((data) => setPokesData(data.results))
      .finally(setLoading(false));
  };

  useEffect(() => {
    FetchData();
  }, []);

  return (
    <React.Fragment>
      {!Loading && pokesData && (
        <ul>
          {pokesData.map((pokemon) => (
            <li>{pokemon.name}</li>
          ))}
        </ul>
      )}
      <button>previous page</button>
      <Router>
        <Switch>
          <Route
            exact
            path="/pokemon-data-fetch2"
            component={PokemonDataFetch}
          />
        </Switch>
      </Router>
      <button onClick={useEffect}>next page</button>
    </React.Fragment>
  );
}

export default PokemonDataFetch;
