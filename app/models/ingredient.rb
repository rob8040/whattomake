class Ingredient < ApplicationRecord
  belongs_to :user

  has_many :recipes

  validates :ingredients, presence: true
end
