import React from "react"

const RecipeTile = ({recipeData}) => {
  let { id, picture, ingredients, instructions, rating, review } = recipeData

  return(
    <div>
      <img src={picture}/>
      <p>Ingredients: {ingredients}</p>
      <p>Instructions: {instructions}</p>
      <p>Rating: {rating}</p>
      <p>Review: {review}</p>
    </div>
  )
}

export default RecipeTile;
