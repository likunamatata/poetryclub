Rails.application.routes.draw do
 
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'

  resources :users do
    resources :poems
  end

  resources :likes
  
end
