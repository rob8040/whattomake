# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(email: "rob@email.com", username: "foodmaster", profile_photo: "image.jpg", password: "123456")
Ingredient.create(user_id: 1, ingredients: "bacon, egg, cheese")
Recipe.create(user_id: 1, ingredient_id: 1, picture: "https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Bacon-Egg-Cheese-Bagel.jpg", ingredients: "bacon, egg, cheese, bagel", instructions: "cook eggs and bacon. put on bagel. add cheese", rating: 7, review: "pretty simple and delicious!")
