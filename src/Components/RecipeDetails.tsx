import React from "react";

interface ingredientsProps {
  text: string;
  weight: number;
}

export const RecipeDetails = ({ ingredients }: any) => {
  return ingredients.map(({ text, weight }: ingredientsProps) => (
    <>
      <ul>
        <li>
          <span role='img' aria-label='ingredients Text'>
            👩‍🍳
          </span>
          {text}
        </li>
        <li>
          <span role='img' aria-label='ingredients Weight'>
            ⚖️
          </span>
          {weight} g
        </li>
      </ul>
    </>
  ));
};
