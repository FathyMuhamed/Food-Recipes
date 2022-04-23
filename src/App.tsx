import React, { useEffect, useState } from "react";
import styles from "./App.module.css";
import { FetchAll, FetchData } from "./Components/FetchData";
import { Recipe } from "./Components/Recipe";
import ShowFood from "./Components/ShowFood";
function App() {
  const [query, setQuery] = useState("");
  const [foodAll, setFoodAll] = useState([]);
  const [foods, setFood] = useState([]);
  const getAll = async () => {
    const getData = await FetchAll();
    setFoodAll(getData);
  };
  useEffect(() => {
    getAll();
  }, []);

  const Search = async () => {
    const data = await FetchData(query);
    setFood(data);
    setQuery("");
  };

  return (
    <>
      <nav>
        <a href='/'>
          <h2 className={styles.logo}>Food Recipes</h2>
        </a>
        <input
          className={styles.input}
          type='text'
          placeholder='Enter Food You Like '
          value={query}
          onKeyPress={(event) => (event.key === "Enter" ? Search() : null)}
          onChange={(e) => setQuery(e.target.value)}
        />
      </nav>
      <div className={styles.app}>
        {foods.length > 0 ? (
          foods.map((food, index) => (
            <Recipe key={index.toString()} recipe={food} />
          ))
        ) : (
          <ShowFood foods={foodAll} />
        )}
      </div>
    </>
  );
}

export default App;
