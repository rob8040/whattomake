import React, { useState, useEffect } from "react"

import RecipeTile from "./RecipeTile"
import IngredientForm from "./IngredientForm"

const RecipesIndexContainer = props => {
  const [ recipes, setRecipes ] = useState([])
  const [ ingredients, setIngredients ] = useState([])
  const [ newIngredients, setNewIngredients ] = useState({
    ingredients: ""
  })
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
    debugger
      fetch("/api/v1/ingredients", {
        method: "POST",
        body: JSON.stringify(formPayload),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
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
          setIngredients([...ingredients, response])
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
          recipeData={recipe}
        />
      </div>
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
      <div className="cell">
        {recipeTiles}
      </div>
    </div>
  )
}

export default RecipesIndexContainer;
