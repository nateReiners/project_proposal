Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :index, :update] do
      resource :follow, only: [:destroy]
    end
    resources :follows, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :photos, only: [:create, :destroy, :index, :show, :update]
  end
end
