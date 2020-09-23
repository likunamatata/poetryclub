Rails.application.routes.draw do
 
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  get '/users/:user_id/poems', to: 'poems#user_poems'
  get '/poems/search/:keyword', to: 'poems#search_poems'
  delete '/users/:user_id/poems/:poem_id/likes', to: 'likes#destroy'
  get '/likes', to: 'likes#all_likes'
  put '/poems/:id', to:'poems#update'

  resources :users do
    resources :poems do
      resources :likes
    end
  end

  resources :poems

end
