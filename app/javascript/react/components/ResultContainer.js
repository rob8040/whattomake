import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const ResultContainer = ({recipes, searchedIngredients}) => {
  let { id, name, picture } = recipes
  let ingredient_id = searchedIngredients.id

  return(
    <div className="card index_margin">
      <Link to={`/ingredients/${ingredient_id}/recipes/${id}`}>
        <div className="index_padding solid">
          <h5 className="link-color" id="name">{name}</h5>
        </div>
        <div className="card-section solid">
          <img src={picture}/>
        </div>
      </Link>
    </div>
  )
}

export default ResultContainer;
