Rails.application.routes.draw do
  root 'welcome#index'

  resources :emotions, only: :index
end
