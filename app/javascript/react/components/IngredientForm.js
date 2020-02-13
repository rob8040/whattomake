import React, { useState } from "react"
import ErrorList from "./ErrorList"
import _ from "lodash"

const IngredientForm = props => {

  return(
    <div className="card index_margin">
      <form className="margin" onSubmit={props.handleSubmit}>
        <ErrorList errors={props.errors}/>
        <label>
          Ingredients:
          <input type="text" id="ingredients" name="ingredients" onChange={props.handleInputChange} id="ingredients" value={props.newIngredients.ingredients} />
        </label>

        <input className="form-input signup" id="submit" type="submit" />
        <br />
        <input onClick={props.clearForm} className="form-input signup" type="button" value="Clear" />
      </form>
    </div>
  )
}

export default IngredientForm;
