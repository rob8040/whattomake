import React from "react"

const RecipeTile = ({recipeData}) => {
  let { id, picture, ingredients, instructions, rating, review } = recipeData

  return(
    <div>
      <img src={picture}/>
      <p id="ingredients">Ingredients: {ingredients}</p>
      <p id="instructions">Instructions: {instructions}</p>
      <p id="rating">Rating: {rating}</p>
      <p id="review">Review: {review}</p>
    </div>
  )
}

export default RecipeTile;
