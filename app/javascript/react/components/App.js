import React from 'react'
import { Route, Switch, BrowserRouter } from "react-router-dom"

import RecipesIndexContainer from "./RecipesIndexContainer"
import ResultContainer from "./ResultContainer"
import ResultShow from "./ResultShow"

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
       <Route exact path="/" component={RecipesIndexContainer}/>
       <Route exact path="/recipes" component={RecipesIndexContainer}/>
       <Route exact path="/recipes_search" component={ResultContainer}/>
       <Route exact path="/ingredients/:ingredient_id/recipes/:id" component={ResultShow}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
