import React, { useState, useEffect } from "react"
import { Redirect } from "react-router-dom"
import ErrorList from "./ErrorList"
import _ from "lodash"

import ResultForm from "./ResultForm"

const ResultShow = props => {
  const [ shouldRedirect, setShouldRedirect ] = useState(false)
  const [ recipeInfo, setRecipeInfo ] = useState({
    name: "",
    picture: "",
    ingredients: "",
    instructions: "",
    rating: "",
    review: ""
  })
  const [ ingredients, setIngredients ] = useState([])
  const ingredient_id = props.match.params["ingredient_id"]
  const recipe_id = props.match.params["id"]
  const [ errors, setErrors ] = useState("")

  useEffect(() => {
    fetch(`/api/v1/ingredients/${ingredient_id}/recipes/${recipe_id}`)
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
      setRecipeInfo(body)
      setIngredients(body.ingredients_array)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  },[])

  if (shouldRedirect) {
    return <Redirect to='/' />
  }

  const clearForm = (event) => {
    setRecipeInfo({
      rating: "",
      review: ""
    })
  }

  const handleInputChange = (event) => {
    setRecipeInfo({
      ...recipeInfo,
      [event.currentTarget.id]: event.currentTarget.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    addNewRecipe(recipeInfo)
    clearForm()
  }

  const addNewRecipe = (formPayload) => {
    fetch("/api/v1/ingredients/${ingredient_id}/recipes", {
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
        setShouldRedirect(true)
      } else {
        setErrors(response.errors)
      }
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  let ingredientList = ingredients.map(ingredient => {

    return(
      <li>
        {ingredient}
      </li>
    )
  })

  // let ingredientString = ingredients.join(", ")

  return(
    <div className="card center index_margin">
      <div className="index_padding solid">
        <h2 className="index_margin bold-headers link-color" id="recipe-name">{recipeInfo.name}</h2>
      </div>
      <div className="card-section solid">
        <img src={recipeInfo.picture}/>
        <h5 className="bold-headers" id="recipe-ingredients">Ingredients:</h5>
        {ingredientList}
        <br />
        <p className="bold-headers" id="recipe-instructions">Instructions: </p>
        {recipeInfo.instructions}
        <ErrorList errors={errors}/>
        <ResultForm
          handleInputChange={handleInputChange}
          recipeInfo={recipeInfo}
          addNewRecipe={addNewRecipe}
          handleSubmit={handleSubmit}
          clearForm={clearForm}
        />
      </div>
    </div>
  )
}

export default ResultShow;
