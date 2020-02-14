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

      if ingredients.save
        render json: { ingredients: ingredients}
      else
        render json: { error: ingredients.errors.full_messages }
      end
    else
      redirect_to root_path
    end
  end

  private

  def ingredient_params
    params.permit(:ingredients)
  end
end
