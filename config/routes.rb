Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  resources :people

  # Defines the root path route ("/")
  root "maps#index"
end
