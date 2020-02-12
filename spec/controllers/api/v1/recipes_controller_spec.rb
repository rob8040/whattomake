require "rails_helper"

RSpec.describe Api::V1::RecipesController, type: :controller do
  let!(:user_1) { FactoryBot.create(:user) }
  let!(:user_2) { FactoryBot.create(:user) }

  let!(:ingredient_1) { Ingredient.create(user_id: user_1.id, ingredients: "bacon, egg, cheese") }
  let!(:ingredient_2) { Ingredient.create(user_id: user_2.id, ingredients: "peanut butter, jelly") }

  let!(:first_recipe) { Recipe.create(
    user_id: user_1.id,
    ingredient_id: ingredient_1.id,
    name: "bacon egg and cheese",
    picture: "image1.jpg",
    ingredients: "bacon, egg, cheese, bagel",
    instructions: "cook eggs and bacon. put on bagel. add cheese",
    rating: 7,
    review: "pretty simple and delicious!"
  )}

  let!(:second_recipe) { Recipe.create(
    user_id: user_2.id,
    ingredient_id: ingredient_2.id,
    name: "pbj",
    picture: "image2.jpg",
    ingredients: "peanut butter, bread, jelly",
    instructions: "spread pb and jelly on bread slices",
    rating: 6,
    review: "The ol standby"
  )}

  describe "GET#index" do
    it "should return a list of all the recipes" do
      get :index
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")
      expect(returned_json.length).to eq 2

      expect(returned_json[0]["user_id"]).to eq user_1.id
      expect(returned_json[0]["ingredient_id"]).to eq ingredient_1.id
      expect(returned_json[0]["name"]).to eq "bacon egg and cheese"
      expect(returned_json[0]["picture"]).to eq "image1.jpg"
      expect(returned_json[0]["ingredients"]).to eq "bacon, egg, cheese, bagel"
      expect(returned_json[0]["instructions"]).to eq "cook eggs and bacon. put on bagel. add cheese"
      expect(returned_json[0]["rating"]).to eq 7
      expect(returned_json[0]["review"]).to eq "pretty simple and delicious!"

      expect(returned_json[1]["user_id"]).to eq user_2.id
      expect(returned_json[1]["ingredient_id"]).to eq ingredient_2.id
      expect(returned_json[1]["name"]).to eq "pbj"
      expect(returned_json[1]["picture"]).to eq "image2.jpg"
      expect(returned_json[1]["ingredients"]).to eq "peanut butter, bread, jelly"
      expect(returned_json[1]["instructions"]).to eq "spread pb and jelly on bread slices"
      expect(returned_json[1]["rating"]).to eq 6
      expect(returned_json[1]["review"]).to eq "The ol standby"
    end
  end
end
