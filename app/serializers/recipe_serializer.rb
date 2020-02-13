class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :picture, :ingredients, :instructions, :rating, :review

  belongs_to :user
  belongs_to :ingredient
end
