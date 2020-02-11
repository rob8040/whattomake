class CreateRecipes < ActiveRecord::Migration[5.2]
  def change
    create_table :recipes do |t|
      t.belongs_to :user, null: false
      t.belongs_to :ingredient, null: false

      t.text :picture, null: false
      t.text :ingredients, null: false
      t.text :instructions, null: false
      t.integer :rating, null: false
      t.text :review
    end
  end
end
