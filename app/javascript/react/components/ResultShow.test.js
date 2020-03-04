import React from "react"
import Enzyme, { mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
// Enzyme.configure({ adapter: new Adapter() })

import ResultShow from "./ResultShow"
import { BrowserRouter } from "react-router-dom"

describe("ResultShow", () => {
  let wrapper
  let recipeInfo
  let ingredientList
  // const spyMatch = jest.fn()
  // const props = {
  //   match: {
  //     params: spyMatch,
  //     state: {}
  //   }
  // }
  // const params = {
  //   token: 'randomToken'
  // }
  // let ingredientString = ingredients.join(", ")

  beforeEach(() => {
    // ingredients
    // ingredientString = ingredients.join(", ")
    // let ingredientString = "potato, kale"
    recipeInfo = {
      name: "kale soup",
      picture: "kale.png",
      ingredients: "potato, kale",
      instructions: "Mix the stuff in broth and stir",
      rating: "5",
      review: "a classic to be sure"
    }

    ingredientList = "potato, kale"


    wrapper = mount(
      <BrowserRouter>
        <ResultShow
          recipeInfo={recipeInfo}
          ingredientList={ingredientList}
        />
      </BrowserRouter>
    )
  })

  it("should render an h2 element containing the recipe name received via props", () => {
    expect(wrapper.find("#recipe-name").text()).toBe("kale soup")
  })

  it("should render an img tag with the specific props", () => {
    expect(wrapper.find("img").props()["src"]).toEqual("kale.png")
  })

  it("should render an h5 element containing the recipe ingredients received via props", () => {
    expect(wrapper.find("#recipe-ingredients").text()).toBe("potato, kale")
  })

  it("should render an p element containing the recipe instructions received via props", () => {
    expect(wrapper.find("#recipe-instructions").text()).toBe("Mix the stuff in broth and stir")
  })
})
