import React, { useState } from "react"
import ErrorList from "./ErrorList"
import _ from "lodash"

const IngredientForm = props => {
  const [ newIngredients, setNewIngredients ] = useState({
    ingredients: ""
  })
  const [ errors, setErrors ] = useState("")

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
      props.addNewIngredient(newIngredients)
      clearForm()
    }
  }

  const clearForm = (event) => {
    setNewIngredients({
      ingredients: ""
    })
  }

  return(
    <div className="card index_margin">
      <form className="" onSubmit={handleSubmit}>
        <ErrorList errors={errors}/>
        <label>
          Ingredients:
          <input type="text" id="ingredients" name="ingredients" onChange={handleInputChange} value={newIngredients.ingredients} />
        </label>

        <input className="form-input signup" id="submit" type="submit" value="Search" />
        <br />
        <input onClick={clearForm} className="form-input signup" type="button" value="Clear" />
      </form>
    </div>
  )
}

export default IngredientForm;
