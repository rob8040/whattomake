class Ingredient < ApplicationRecord
  belongs_to :user
  validates :ingredients, presence: true
end
