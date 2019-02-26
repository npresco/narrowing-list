Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "users#index"

  get "search/(:query)", to: "users#search"
  get "sort/(:field)/(:dir)/(:query)", to: "users#sort"
end
