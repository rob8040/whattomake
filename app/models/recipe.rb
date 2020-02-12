class Recipe < ApplicationRecord
  belongs_to :user
  belongs_to :ingredient

  validates :name, presence: true
  validates :picture, presence: true
  validates :ingredients, presence: true
  validates :instructions, presence: true
  validates :rating, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 10 }
end
