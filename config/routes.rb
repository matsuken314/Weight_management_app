Rails.application.routes.draw do
  devise_for :users
  root to: "graphs#index"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.ht
  # resource「s」ではない！（updateに「:id」は不要だから）
  resource :graphs, only: %i[index create update]
end
