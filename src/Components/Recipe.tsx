import React from "react";
import styles from "../App.module.css";
import { RecipeDetails } from "./RecipeDetails";

export function Recipe({ recipe }: any) {
  const { label, image, url, ingredients } = recipe.recipe;
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <div className={styles.Recipe}>
        <h2>{label}</h2>
        <img src={image} alt='' />
        <div className={styles.details}>
          <a href={url} target='_blank' rel='noopener noreferrer'>
            <span role='img' aria-label='Details'>
              Details🍒
            </span>
          </a>
          <span
            role='img'
            aria-label='Ingredients'
            onClick={() => setOpen((open) => !open)}>
            Ingredients👩‍🍳
          </span>
        </div>

        {open && (
          <div className={styles.recipeDetails}>
            <ol>
              <span
                className={styles.close}
                onClick={() => setOpen((open) => !open)}>
                &#9587;
              </span>
              <RecipeDetails ingredients={ingredients} />
            </ol>
          </div>
        )}
      </div>
    </>
  );
}
