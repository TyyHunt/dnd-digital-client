Rails.application.routes.draw do

  namespace :api do
    resources :users
    resources :sessions, only: [:create]
    resources :weapons, :races, :klasses
    delete :logout, to: "sessions#logout"
    get :logged_in, to: "sessions#logged_in"
    post :find, to: "users#find"
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
