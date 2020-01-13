class ApplicationController < ActionController::Base
        include DeviseTokenAuth::Concerns::SetUserByToken
        # CSRF(クロスサイトリクエストフォージェリ)対策
        protect_from_forgery
end
