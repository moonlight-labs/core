Rails.application.routes.draw do
  root to: 'application#index', as: :home
  mount Core::Auth::Railtie, at: ''
  post '/graphql', to: 'graphql#execute'
  mount ActionCable.server => '/cable'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
