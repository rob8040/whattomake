import React, { useState, useEffect } from "react"
import { Redirect } from "react-router-dom"

import RecipeTile from "./RecipeTile"
import IngredientForm from "./IngredientForm"
import ResultContainer from "./ResultContainer"

const RecipesIndexContainer = props => {
  const [ shouldRedirect, setShouldRedirect ] = useState(false)
  const [ allRecipes, setAllRecipes ] = useState([])
  const [ newRecipes, setNewRecipes ] = useState([])
  const [ searchedIngredients, setSearchedIngredients ] = useState({})

  useEffect(() => {
    fetch("/api/v1/ingredients/:ingredient_id/recipes")
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
      setAllRecipes(body.recipes)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  },[])

  const addNewIngredient = (formPayload) => {
    fetch("/api/v1/recipes_search", {
      credentials: 'same-origin',
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formPayload)
    })
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
    .then(response => {
      if (response) {
        setNewRecipes(response.recipes_array)
        setSearchedIngredients(response.ingredients)
      } else {
        setErrors(response.errors)
      }
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  const recipeTiles = allRecipes.map(recipe => {

    return(
      <div>
        <RecipeTile
          key={recipe.id}
          ingredientData={recipe}
        />
      </div>
    )
  })

  let returnedRecipes = newRecipes.map(recipe => {

    return(
      <ResultContainer
        key={recipe.id}
        recipes={recipe}
        searchedIngredients={searchedIngredients}
      />
    )
  })

  return(
    <div className="grid-x">
      <div className="cell">
        <IngredientForm
          addNewIngredient={addNewIngredient}
        />
      </div>
      {returnedRecipes}
      <div className="cell">
        {recipeTiles}
      </div>
    </div>
  )
}

export default RecipesIndexContainer;
