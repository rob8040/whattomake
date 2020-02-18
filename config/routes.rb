Rails.application.routes.draw do
  root 'homes#index'

  get "/", to: 'homes#index'
  get "/recipes", to: 'homes#index'
  get "/ingredients/:ingredient_id/recipes/:id", to: 'homes#index'
  get "/recipes_search", to: 'homes#index'

  devise_for :users


  namespace :api do
    namespace :v1 do
      post '/recipes_search', to: "ingredients#search"
      resources :ingredients, only: [:index, :create] do
        resources :recipes, only: [:index, :create, :show]
      end
    end
  end
end
