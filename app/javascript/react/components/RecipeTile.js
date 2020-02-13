import React from "react"

const RecipeTile = ({ingredientData}) => {
  let { id, ingredients, user, recipes } = ingredientData
debugger
  return(
    <div className="card index_margin">
      <div className="index_padding solid">
        <h5 id="username">User: {user.username}</h5>
        <h5 id="useringredients">Ingredients user had: {ingredients}</h5>
      </div>
        <div className="card-divider">
        <h1 id="name">{recipes[0].name}</h1>
      </div>
      <div className="card-section solid">
        <img src={recipes[0].picture}/>
        <p id="ingredients">Ingredients: {recipes[0].ingredients}</p>
        <p id="instructions">Instructions: {recipes[0].instructions}</p>
        <p id="rating">Rating: {recipes[0].rating}</p>
        <p id="review">Review: {recipes[0].review}</p>
      </div>
    </div>
  )
}

export default RecipeTile;
