class Api::V1::RecipesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: Recipe.all.reverse
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

  def create
    if current_user
      recipe = Recipe.new(recipe_params)
      recipe.user_id = current_user.id
      recipe.ingredient_id = current_user.ingredients.last.id
      ingredients_string = params["ingredients_array"].join(", ")
      recipe.ingredients = ingredients_string

      if recipe.save
        render json: recipe
      end
    end
  end

  def destroy
    recipe = Recipe.find(params["id"])
    if current_user.id == recipe.user_id
      recipe.destroy
      recipes = Recipe.all.reverse
      render json: recipes
    else
      render json: recipes
    end
  end

  private

  def recipe_params
    params.permit(:ingredients, :name, :picture, :instructions, :rating, :review)
  end
end
