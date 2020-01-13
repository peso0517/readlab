Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    scope :v1 do
      mount_devise_token_auth_for 'User', at: 'auth', controllers: {
          registrations: 'api/v1/auth/registrations'
      }
    end
  end
  root 'home#about'
 end

# 以下修正前
# Rails.application.routes.draw do
#   # mount_devise_token_auth_for 'User', at: 'auth'
#   root 'home#about'
# end
