class Api::V1::RecipesController < ApplicationController
  def index
    render json: Recipe.all
  end

  def show
    recipe_id = params["id"]
    response = Faraday.get("https://api.spoonacular.com/recipes/#{recipe_id}/information?includeNutrition=false&apiKey=#{ENV["SPOON_KEY"]}")
    parsed_response = JSON.parse(response.body)
    ingredient_list = parsed_response["extendedIngredients"]
    ingredients_array = []
    ingredient_list.each do |ingredient|
      ingredients_array << ingredient["original"]
    end
    name = parsed_response["title"]
    picture = parsed_response["image"]
    instructions = parsed_response["instructions"]

    render json: { ingredients_array: ingredients_array, name: name, picture: picture, instructions: instructions}
  end
end
