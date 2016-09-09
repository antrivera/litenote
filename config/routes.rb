Rails.application.routes.draw do

  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resources :notebooks, only: [:index, :create, :show, :update, :destroy]
    resources :notes, only: [:index, :create, :show, :update, :destroy]
    resources :tags, only: [:index, :create, :show, :destroy]
    resource :session, only: [:create, :destroy]
  end
end
