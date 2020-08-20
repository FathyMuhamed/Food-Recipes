import React, { useState } from "react";
import styles from "./App.module.css";
import { FetchData } from "./Components/FetchData";
import { Recipe } from "./Components/Recipe";
function App() {
  const [query, setQuery] = useState("");
  const [foods, setFood] = useState([]);
  const Search = async () => {
    const data = await FetchData(query);
    setFood(data);
    setQuery("");
  };
  return (
    <>
      <nav>
        <h2 className={styles.logo}>Food Recipes</h2>
        <input
          className={styles.input}
          type='text'
          placeholder="Enter Food You Like "
          value={query}
          onKeyPress={(event) => (event.key === "Enter" ? Search() : null)}
          onChange={(e) => setQuery(e.target.value)}
        />
      </nav>
      <div className={styles.app}>
        {foods.map((food, index) => (
          <Recipe key={index.toString()} recipe={food} />
        ))}
      </div>
    </>
  );
}

export default App;
