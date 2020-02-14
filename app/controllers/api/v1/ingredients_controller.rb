class Api::V1::IngredientsController < ApplicationController
  # before_action :authenticate_user!, only: [:create]
  skip_before_action :verify_authenticity_token, only: [:create]

  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: Ingredient.all
  end

  def create
    if current_user
      ingredients = Ingredient.new(ingredient_params)
      ingredients.user = current_user
      array = []
      base_url = "https://api.spoonacular.com/recipes/findByIngredients?ingredients="
      split_query = ingredients.ingredients.split(", ")
      array << split_query.shift
      plus = split_query.map { |x| "+" + x }
      array.concat(plus)
      final = array.join(",")
      search_url = base_url += (final + "&number=3")
      search = search_url += ("&apiKey=#{ENV["SPOON_KEY"]}")

      # response = Faraday.get(search)
      binding.pry
    #   if ingredients.save
        # render json: { ingredients: ingredients}
    #   else
    #     render json: { error: ingredients.errors.full_messages }
    #   end
    # else
      # redirect_to root_path
    end
  end

  private

  def ingredient_params
    params.permit(:ingredients)
  end
end
