import React from "react"

const RecipeTile = ({ingredientData}) => {
  let { id, name, picture, ingredients, instructions, rating, review, ingredient, user } = ingredientData

  return(
    <div className="card index_margin">
      <div className="index_padding solid">
        <h5 id="username">User: {user.username}</h5>
        <h5 id="useringredients">Ingredients user had: {ingredient.ingredients}</h5>
      </div>
      <div className="card-divider">
        <h1 id="name">{name}</h1>
      </div>
      <div className="card-section solid">
        <img src={picture}/>
        <p id="ingredients">Ingredients: {ingredients}</p>
        <p id="instructions">Instructions: {instructions}</p>
        <p id="rating">Rating: {rating}</p>
        <p id="review">Review: {review}</p>
      </div>
    </div>
  )
}

export default RecipeTile;
