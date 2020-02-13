import React from "react"
import Enzyme, { mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { BrowserRouter } from "react-router-dom"

Enzyme.configure({ adapter: new Adapter() })

import RecipeTile from "./RecipeTile"

describe("RecipeTile", () => {
  let wrapper
  let ingredientData

  beforeEach(() => {
    ingredientData = {
      ingredients: "my food",
      user: {username: "Userman"},
      recipes: [{name: "food title", picture: "image.png", ingredients: "food", instructions: "just do it", rating: "5", review: "this is ok"}]
    }
    wrapper = mount(
      <BrowserRouter>
        <RecipeTile
          ingredientData={ingredientData}
        />
      </BrowserRouter>
    )
  })

  it("should find a h5 element containing the username as props", () => {
    expect(wrapper.find("#username").text()).toBe("User: Userman")
  })

  it("should find a h5 element containing the ingredients as props", () => {
    expect(wrapper.find("#useringredients").text()).toBe("Ingredients user had: my food")
  })

  it("should find a h1 element containing the name as props", () => {
    expect(wrapper.find("#name").text()).toBe("food title")
  })

  it("should find an img element containing the picture via props", () => {
    expect(wrapper.find("img").props()["src"]).toEqual("image.png")
  })

  it("should find a p element containing the ingredients as props", () => {
    expect(wrapper.find("#ingredients").text()).toBe("Ingredients: food")
  })

  it("should find a p element containing the instructions as props", () => {
    expect(wrapper.find("#instructions").text()).toBe("Instructions: just do it")
  })

  it("should find a p element containing the rating as props", () => {
    expect(wrapper.find("#rating").text()).toBe("Rating: 5")
  })

  it("should find a p element containing the review as props", () => {
    expect(wrapper.find("#review").text()).toBe("Review: this is ok")
  })
})
