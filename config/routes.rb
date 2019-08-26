Rails.application.routes.draw do
  namespace :api do
    resources :weapons
    resources :races
    resources :klasses
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
