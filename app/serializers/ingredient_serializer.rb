class IngredientSerializer < ActiveModel::Serializer
  attributes :id, :ingredients

  belongs_to :user
  has_many :recipes
end
