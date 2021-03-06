Rails.application.routes.draw do
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # Example of regular route:
  namespace :api do
    namespace :v1 do
      resources :notes
      get 'teams' => 'nba#teams', as: :team
      get 'teams/:id' => 'nba#team_roster', as: :roster
      get 'player/:id' => 'nba#player', as: :player
      get 'games/:date' => 'nba#games', as: :games
      get 'playbyplay/:game_id/:start_period/:end_period' => 'nba#play_by_play', as: :play_by_play
      get 'activity/:game_id/:start_period/:end_period' => 'nba#activity_play', as: :activity_play
    end
  end
  get '/' => 'static#home', as: :home_page
  get '/team/:id' => 'static#team', as: :single_team_page
  get '/games' => 'static#games', as: :games_page
  get '/playbyplay/:id' => 'static#playbyplay', as: :single_game_plays
  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end

  ## LEAVE THIS AT THE END SO THAT ANY ROUTE NOT AVAIABLE IS REDIRECT TO ROOT!!!
  get '*path' => redirect('/')

end
