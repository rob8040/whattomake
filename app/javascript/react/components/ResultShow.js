import React, { useState, useEffect } from "react"

const ResultShow = props => {
  const [ recipeInfo, setRecipeInfo ] = useState({})
  const [ ingredients, setIngredients ] = useState([])
  const ingredient_id = props.match.params["ingredient_id"]
  const recipe_id = props.match.params["id"]

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

  let ingredientList = ingredients.map(ingredient => {

    return(
      <li>
        {ingredient}
      </li>
    )
  })

  return(
    <div className="card index_margin">
      <div className="index_padding solid">
        <h2 id="">{recipeInfo.name}</h2>
      </div>
      <div className="card-section solid">
        <img src={recipeInfo.picture}/>
        <h5>Ingredients:</h5>
        {ingredientList}
        <br />
        <p id="">Instructions: {recipeInfo.instructions}</p>
      </div>
    </div>
  )
}

export default ResultShow;
