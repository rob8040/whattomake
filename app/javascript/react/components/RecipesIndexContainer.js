import React, { useState, useEffect } from "react"

import RecipeTile from "./RecipeTile"

const RecipesIndexContainer = props => {
  const [ recipes, setRecipes ] = useState([])

  useEffect(() => {
    fetch("/api/v1/recipes")
    .then(response => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage)
        throw error
      }
    })
    .then(response => response.json())
    .then(body => {
      setRecipes(body)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  },[])

  const recipeTiles = recipes.map(recipe => {

    return(
      <div>
        <RecipeTile
          key={recipe.id}
          recipeData={recipe}
        />
      </div>
    )
  })

  return(
    <div>
      {recipeTiles}
    </div>
  )
}

export default RecipesIndexContainer;
