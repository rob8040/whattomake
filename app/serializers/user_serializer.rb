class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :username, :about, :profile_photo

  has_many :ingredients
  has_many :recipes
end
