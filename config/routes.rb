Rails.application.routes.draw do
  resources :user_groups, only: [:index, :show, :create]
  resources :predictions, only: [:index, :show, :create, :destroy]
  resources :groups, only: [:index, :show, :create]
  resources :games, only: [:index, :show, :update]
  resources :users, only: [:index, :show, :create]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get "/me", to: "sessions#show"
  post "/signin", to: "sessions#create"
  delete "/signout", to: "sessions#destroy"

end
