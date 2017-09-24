Rails.application.routes.draw do
  resources :todos
  resources :posts
  root 'posts#index'
end
