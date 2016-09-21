Rails.application.routes.draw do
  root 'welcome#index'

  resources :emotions, only: [] do 
    resources :notes, only: [:index, :create, :destroy]
  end
end
