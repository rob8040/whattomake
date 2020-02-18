import React, { useState, useEffect } from "react"

const ResultContainer = ({recipes}) => {
  let { id, name, picture } = recipes

  return(
    <div className="card index_margin">
      <div className="index_padding solid">
        <h5 id="username">{name}</h5>
      </div>
      <div className="card-section solid">
        <img src={picture}/>
      </div>
    </div>
  )
}

export default ResultContainer;
