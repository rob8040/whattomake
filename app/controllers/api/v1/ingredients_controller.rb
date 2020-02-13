class Api::V1::IngredientsController < ApplicationController
  def index
    render json: Ingredient.all
  end

  def create
    ingredients = Ingredient.new(ingredient_params)
    
    if ingredients.save
      render json: { ingredients: ingredients}
    else
      render json: { error: ingredients.errors.full_messages }
    end
  end

  private
  def ingredient_params
    params.permit(:ingredients)
  end
end
