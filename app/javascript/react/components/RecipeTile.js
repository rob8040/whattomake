import React from "react"

const RecipeTile = ({recipeData}) => {
  let { id, picture, ingredients, instructions, rating, review } = recipeData
debugger
  return(
    <div>
      <h1>{ingredients}</h1>
    </div>
  )
}

export default RecipeTile;
