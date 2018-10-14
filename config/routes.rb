Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'top#index'

  controller :ajax do
    get 'ajax/save_history/:feed_id', action: :save_history, as: :save_history
  end
end
