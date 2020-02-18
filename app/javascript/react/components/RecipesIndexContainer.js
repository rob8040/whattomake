import React, { useState, useEffect } from "react"
import { Redirect } from "react-router-dom"

import RecipeTile from "./RecipeTile"
import IngredientForm from "./IngredientForm"
import ResultContainer from "./ResultContainer"

const RecipesIndexContainer = props => {
  const [ shouldRedirect, setShouldRedirect ] = useState(false)
  const [ recipes, setRecipes ] = useState([])
  const [ ingredients, setIngredients ] = useState([])
  const [ newIngredients, setNewIngredients ] = useState({})
  const [ errors, setErrors ] = useState("")

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
      setRecipes(body.recipes)
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
        setIngredients(response)
      } else {
        setErrors(response.errors)
      }
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  const handleInputChange = (event) => {
    setNewIngredients({
      ...newIngredients,
      [event.currentTarget.id]: event.currentTarget.value
    })
  }

  const validSubmission = () => {
    let submitErrors = {}
    const requiredFields = ["ingredients"]
    requiredFields.forEach((field) => {
      if (newIngredients[field].trim() === "") {
        submitErrors = {
          ...submitErrors, [field]: "is blank"
        }
      }
    })
    setErrors(submitErrors)
    return _.isEmpty(submitErrors)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (validSubmission()) {
      addNewIngredient(newIngredients)
      clearForm()
    }
  }

  const clearForm = (event) => {
    setNewIngredients({
      ingredients: ""
    })
  }

  const recipeTiles = recipes.map(recipe => {

    return(
      <div>
        <RecipeTile
          key={recipe.id}
          ingredientData={recipe}
        />
      </div>
    )
  })

  let returnedRecipes = ingredients.map(recipe => {
    
    return(
      <ResultContainer
        key={recipe.id}
        recipes={recipe}
      />
    )
  })

  return(
    <div className="grid-x">
      <div className="cell">
        <IngredientForm
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          clearForm={clearForm}
          newIngredients={newIngredients}
          errors={errors}
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
