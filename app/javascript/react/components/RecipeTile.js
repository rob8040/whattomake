import React from "react"

const RecipeTile = ({recipeData}) => {
  let { id, name, picture, ingredients, instructions, rating, review, user, ingredient } = recipeData

  return(
    <div>
      <h5 id="username">User: {user.username}</h5>
      <h5 id="useringredients">Ingredients user had: {ingredient.ingredients}</h5>
      <h1 id="name">{name}</h1>
      <img src={picture}/>
      <p id="ingredients">Ingredients: {ingredients}</p>
      <p id="instructions">Instructions: {instructions}</p>
      <p id="rating">Rating: {rating}</p>
      <p id="review">Review: {review}</p>
    </div>
  )
}

export default RecipeTile;
