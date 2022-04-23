import React from "react";
import { Recipe } from "./Recipe";

function ShowFood({ foods }: any) {
  return (
    <>
      {foods.map((food: any, index: any) => (
        <Recipe key={index.toString()} recipe={food} />
      ))}
    </>
  );
}

export default ShowFood;
