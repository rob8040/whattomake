class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :picture, :ingredients, :instructions, :rating, :review, :username, :current_username

  belongs_to :user, if: :current_user?
  belongs_to :ingredient

  def username
    object.user.username
  end

  def current_user?
    object.user == scope
  end

  def current_username
    if current_user?
      scope.username
    end
  end
end
