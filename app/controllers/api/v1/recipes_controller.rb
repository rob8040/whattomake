class API::V1::RecipesController < ApplicationController
  def index
    render json: Recipe.all
    binding.pry
  end
end
