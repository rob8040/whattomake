Rails.application.routes.draw do
  root 'homes#index'

  get "/", to: 'homes#index'
  get "/recipes", to: 'homes#index'

  devise_for :users

  namespace :api do
    namespace :v1 do
      resources :recipes, only: [:index]
    end
  end
end