import React from "react"

const RecipeTile = ({deleteRecipe, ingredientData}) => {
  let { id, name, picture, ingredients, current_username, username, instructions, rating, review, ingredient, user } = ingredientData
  let className = "hidden"
  if (current_username === username) {
    className = "visible delete-color"
  }

  const handleDelete = () => {
    deleteRecipe(id)
  }

  return(
    <div className="card index_margin">
      <div className="index_padding solid">
        <h5 id="username"><div className="bold-headers">User:</div> {username}</h5>
        <h5 id="useringredients"><div className="bold-headers">Ingredients User Had:</div> {ingredient.ingredients}</h5>
      </div>
      <div className="card-divider center_margin padding box_color">
        <h1 className="center text_color name-bold" id="name">{name}</h1>
      </div>
      <div className="card-section solid">
        <img src={picture}/>
        <div className="bold-headers">Ingredients: </div>
        <p id="ingredients">{ingredients}</p>
        <div className="bold-headers">Instructions: </div>
        <p id="instructions">{instructions}</p>
        <div className="bold-headers">Rating: </div>
        <p id="rating">{rating}</p>
        <div className="bold-headers">Review: </div>
        <p id="review">{review}</p>
        <input className={className} type="button" onClick={handleDelete} value="Delete Review" />
      </div>
    </div>
  )
}

export default RecipeTile;
