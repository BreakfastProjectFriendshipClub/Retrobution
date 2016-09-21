Rails.application.routes.draw do
  root 'welcome#index'


  get "/happy", to: 'welcome#index', as: 'happy'
  get "/meh", to: 'welcome#index', as: 'meh'
  get "/sad", to: 'welcome#index', as: 'sad'
  # resources :emotions, only: [] do 
  #   resources :notes, only: [:index, :create, :destroy]
  # end
end
