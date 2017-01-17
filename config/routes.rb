Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :index]
    resource :session, only: [:create, :destroy]
    resources :photos, only: [:create, :destroy, :index, :show, :update]
    resources :follows, only: [:create, :destroy]
  end
end
