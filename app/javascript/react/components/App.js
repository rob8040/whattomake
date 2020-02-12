import React from 'react'
import { Route, Switch, BrowserRouter } from "react-router-dom"

import RecipesIndexContainer from "./RecipesIndexContainer"

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
       <Route exact path="/" component={RecipesIndexContainer}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
