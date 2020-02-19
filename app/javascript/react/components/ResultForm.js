import React, { useState } from "react"

const ratings = ["", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const ResultForm = props => {
  const [ newReview, setNewReview ] = useState({
    rating: null,
    review: ""
  })
  const ratingOptions = ratings.map((rating) => <option key={rating} value={rating}>{rating}</option>)

  return(
    <form className="" onSubmit={props.handleSubmit} >
      <label>
        Rating:
        <select className="" onChange={props.handleInputChange} id="rating" value={newReview.rating}>
          {ratingOptions}
        </select>
      </label>
      <label>
        Review:
        <textarea type="text" id="review" name="rating" onChange={props.handleInputChange} value={props.recipeInfo.review} />
      </label>

      <input className="form-input signup" id="submit" type="submit" />
      <br />
      <input onClick={props.clearForm} className="form-input signup" type="button" value="Clear" />
    </form>
  )
}

export default ResultForm;
