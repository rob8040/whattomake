Rails.application.routes.draw do
  root 'homes#index'

  get "/", to: 'homes#index'
  get "/recipes", to: 'homes#index'
  get "/recipes_search", to: 'homes#index'

  devise_for :users


  namespace :api do
    namespace :v1 do
      post '/recipes_search', to: "ingredients#search"
      resources :recipes, only: [:index]
      resources :ingredients, only: [:index, :create] do
        resources :recipes, only: [:index, :create]
      end
    end
  end
end
