import React from 'react'
import { Route, Switch, BrowserRouter } from "react-router-dom"

import RecipesIndexContainer from "./RecipesIndexContainer"
import ResultContainer from "./ResultContainer"

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
       <Route exact path="/" component={RecipesIndexContainer}/>
       <Route exact path="/recipes" component={RecipesIndexContainer}/>
       <Route exact path="/api/v1/ingredients/:ingredient_id/recipes" component={ResultContainer}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
